---
path: "/work/artswave-pass"
date: "2019-08-10"
title: "Artswave Pass"
type: "work"
category: "website"
tags: ["WordPress", "PHP"]
---

Artswave is a Cincinnati based organization that offers users a chance to find and attend local events. They have a somewhat complex back-end that manages users, coupons, events and tickets all contained within WordPress. I am not sure who originally built out the website, but they came to us for maintenance services and ultimately a design refresh.

![Artswave Pass](./uploads/artswave-pass.jpg)

Since I inherited the codebase I had to first familiarize myself with how things worked. I don't want to disclose too much information about how the site is architected to prevent malicious actors from exploiting it. With that being said, our designer [Sarah Powers](https://sarahpowers.pizza) was given the task to refresh their website while keeping all core functionality the same. I then had to apply this new theme without affecting their users or data.

Luckily the core functionality of the site was already mostly decoupled from the theme (as it should be). Since I patched them, I have no problem disclosing the fact that previously there were multiple SQL injection points of attack that could have been exploited. In multiple locations in the custom User class there were database queries being executed with un-prepared input directly from `$_POST` which is a huge no-no. I escaped the input early, filtered it through some sanitization functions and used `mysql->prepare` to ensure the data would not cause any problems.

All in all the project went fairly smoothly and the client was very happy with the end result.

<a href="https://pass.artswave.org" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Visit Artswave Pass</a>

