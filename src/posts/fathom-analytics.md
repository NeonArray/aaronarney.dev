---
path: "/blog/fathom-analytics"
date: "2019-02-04"
title: "Fathom Analytics"
category: "web"
tags: ["AWS", "Apache", "EC2"]
---

The following is not entirely a step-by-step tutorial on how to get up and running with Fathom. Instead this is an overview of my setup and how I went about getting a Fathom server up and capturing data.

## Fathom

[Fathom is an privacy focused data collection system](https://github.com/usefathom/fathom) that replaces the need for using intrusive and overreaching platforms like Google or Adobe analytics. Of course companies or individuals that require a great deal of data filtering, conversions, filters, etc, will probably not be able to replace their platforms of choice with Fathom. The greatess "weakness" of Fathom is also it's greatest strength, simplicity. Instead of tracking tons of data that you really will never use, much less _how_ to use, Fathom just gives you the data you're really looking for - visitors and top pages.

It took me a few hours to get the Fathom server up and running using an Amazon Web Services EC2 instance. This is mostly due to my inexperience with managing servers on AWS and less to do with Fathom as an application. I first attempted to run the Fathom docker image using Amazon's ECS platform, but those efforts proved futile. In the end I decided to say fuck it and just boot up an Ubuntu image and install Fathom manually.

This is how I went about it. The instructions are written in the 


## Launching EC2 Instance

1. Create an EC2 instance, with Ubuntu
2. Create an Elastic IP and associate it with the EC2 instance
3. SSH into the instance
4. Download Fathom `curl -o fathom.tar.gz -L https://github.com/usefathom/fathom/releases/download/v1.2.1/fathom_1.2.1_linux_amd64.tar.gz`
5. Extract the tarball `sudo tar -C /usr/local/bin -xzf fathom.tar.gz`
6. Change the permissions `sudo chmod +x /usr/local/bin/fathom`
7. Check it installed `fathom --version`


### Configuring Fathom

1. Create an `.env` file with the following

```bash
FATHOM_SERVER_ADDR=8080
FATHOM_GZIP=true
FATHOM_DEBUG=true
FATHOM_DATABASE_DRIVER="sqlite3"
FATHOM_DATABASE_NAME="fathom.db"
FATHOM_SECRET="random-secret-string-change-this"
```

2. Create a service file `sudo touch /etc/systemd/system/fathom.service`

```bash
[Unit]
Description=Starts the fathom server
Requires=network.target
After=network.target

[Service]
Type=simple
User=ubuntu
Restart=always
RestartSec=3
WorkingDirectory=/home/ubuntu
ExecStart=/usr/local/bin/fathom server

[Install]
WantedBy=multi-user.target
```

5. Reload the daemon, enable fathom, and start it.

```bash
sudo systemctl daemon-reload
sudo systemctl enable fathom
sudo systemctl start fathom
```


## Configuring a Custom Domain

1. Create a new Hosted Zone in **AWS Route 53**
2. Supply your domain name and leave the `type` as `Public Hosted Zone`
3. Once created, make two new `Record Set` by clicking on the `Create Record Set` button
4. Add `A` type with a blank `Name`. Paste the address of your **Elastic IP** as the `value`
5. Add `A` type with a name of `www`. Paste the `Public DNS` of the **EC2** as the `value`
6. SSH back into the EC2 instance
7. Enable `mod_proxy` via the commands

```bash
sudo a2enmod proxy
sudo a2enmod proxy_balancer
sudo a2enmod proxy_http
```

8. Edit the Apache2.conf `sudo vim /etc/apache2/apache2.conf` and add the following at the bottom

```apacheconf
ProxyPass "/" "http://keytar.co:8080/"
ProxyPassReverse "/" "http://keytar.co:8080/"
```

9. Restart Apache `sudo systemctl restart apache2`

Now the requests to `http://keytar.co` should route to `http://keytar.co:8080` behind the scenes. That way users don't have to know to use the `:8080` port and makes passing the URL as a configuration much easier.


### Content Security Policy

Fathom uses embedded data in images as a way of capturing data instead of ajax. Because of this, my content security policy was preventing the images from being created, as it sets the source of the image to be my tracking url for Fathom, in my case `https://keytar.co` (a domain I had sitting around doing nothing).

Modifying the CSP header in my `gatsby-config.js` was easy enough. I just had to pass `https://keytar.co` as an additional value.

```csp
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://keytar.co; connect-src 'self'; img-src https://*.ocular-rhythm.io https://keytar.co data:; style-src 'self' 'unsafe-inline';
```

The last step is to throw the tracking code Fathom gives you when you create a new site.
 
Bye.
