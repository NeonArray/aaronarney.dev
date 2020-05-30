---
path: "/blog/azure-devops-pipeline-shopify"
date: "2019-04-11"
title: "Azure Devops Pipeline Build with Shopify"
category: "web"
tags:
    [
        "Azure",
        "DevOps",
        "Shopify",
        "Continuous Integration",
        "Continous Delivery",
    ]
---

At Leap, we utilize Microsoft's Team Foundation for all of our version control efforts. Included in this platform is Azure DevOps, a service that allows users to set up continuous improvement, continuous delivery, and continuous deployment, for repositories.

A client of ours, [Kern's Kitchen](https://derbypie.com), is a Shopify hosted website that requires deployments from the command line in order to update theme code. I decided to set up an Azure Pipeline to automate this deployment, but ran into an issue. Shopify developed a node package called Slate that allows a dev to generate, develop, and deploy themes. This package also includes a very annoying "feature" that stopped my automated deployments dead in their tracks.

## The Issue

Before I jump into the issue, I want to provide my pipeline and give a bit of context. I'm not going to go over on how to build a pipeline out in Azure, but it's worth noting the tasks I needed to be accomplished for deployments.

1. Install Node v9.10.1
2. Run `npm install`
3. Run `npm run-script gulp`
4. Run `npm run-script deploy`

In my `package.json`, my scripts look something like the following.

```json
{
    "scripts": {
        "gulp": "gulp build",
        "deploy": "slate-tools build && slate-tools deploy --skipPrompts"
    }
}
```

All of my tasks would execute right up until it hit step number 4, my `deploy` command. The "error" I received from Azure was as helpful as...well...something. Disclaimer, this isn't verbatim as I'm writing this from memory at the moment.

```bash
Error: Exited with error code 130
```

When I inspected the logs, there was no error to be found, just that the script halted execution as soon as slate-tools initialized. At this point I started brainstorming and attempting different fixes, among them...

1. Changed the `Agent Pool` to a mac, then ubuntu, and VS2017...thinking maybe the script was choking when it hit the `&&` operator in my script for some reason.
2. Changed the node version.
3. Wrote a bash script that executed all the commands instead of using individual tasks.
4. Upgraded slate-tools to the latest beta version.
5. Many others..

Then it hit me like a ton of bricks. The reason I couldn't reproduce this error locally, was that I have used slate-tools a ton. When you first build a theme with the slate-tools, Shopify asks if they can collect data from you using a prompt. Once you answer that question, a `.slaterc` file generates and stored on the root of your OS. Since this file was present, I was never asked again - even though I cleared all global packages from my system, did `yarn cache clean`, among other things.

Now it all made sense. Since a new container's spun up to run my scripts, it will never save a `.slaterc` file locally. Thus, the question will always be asked "can we fucking collect analytics from you," with the task runner never being able to answer. Instead, it aborts the script and fails, even with the `--skipPrompts` flag!

## Solution

The solution was simple. Create a `.slaterc` file in the root of any Shopify project, copy the contents of the one on my local machine, and commit that to the repo. I also had to set a configuration value in the `slate.config.js` file that tells Slate to look for this rc file in the root of my project, as opposed to OS.

What happens? Spoiler alert, it fucking deploys with no problems.

### In Conclusion

Maybe there is a super easy way to combat these types of issues in packages during CI/CD builds. I'm fairly new to using these automated systems, but after searching around I couldn't find a simple answer.

I think the take away here is that, in my humble opinion, you should not create these kinds of prompts without a more clear way of circumventing them. As of this writing, Shopify decided the Slate tool was not worth maintaining or improving, so it might die soon anyway, who knows.
