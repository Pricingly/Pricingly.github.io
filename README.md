### How To Set Up Custom Domain Name

Setting up a custom domain name on github is somewhat of a complex process. However, with this little guide, it becomes extremely simple and easy to understand.

**TDLR:**
```
- 1) Configure domain verification on personal account or organization name (in settings)
- 2) Configure DNS A Records to connect domain name to Github's servers
- 3) Configure custom name inside github repository with your new domain name
```

### Step One: Configure domain verification on personal account or organization name

- If you're creating a custom domain for your personal account (aka one that is not a team organization), go to the top right where your profile picture is and click `settings` in the dropdown
- If you're creating a custom domain for your organization, you're going to find `settings` on your organization navigation bar

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215392965-19d01732-4402-491a-8ae8-f8cc98b75cc7.png">

Once you're in there, press `pages` in the left column navigation bar, where you have the option to `Add a Domain`. Enter you domain name, and you should be prompted to a screen like this.

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215393318-37675604-b272-4b8b-adc8-145d79fcbc8f.png">

Github is asking you to verify you or your organization owns this domain by asking for a TXT Record. This can be found on your domain provider admin panel (where you bought the domain). 

- If your admin area has a manage DNS option, click on that, and there should be an option for `TXT Records` there
- **Add a new TXT Record**: replacing `hostname` and `value` with the ones given by github.

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215394646-4c704a48-c2a7-49ba-993e-22224ec61a4b.png">

If you've done everything correctly so far, you should see the `verifed` badge next to your domain. Congrats! You've completed step One.

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215395062-9188ae40-6773-49db-a6c8-dd2d03a017bf.png">

### Step Two: Configure DNS A Records to connect domain name to Github's servers

There are four Destination I.P addresses that you will need to connect your domain to Github's servers:

`185.199.108.153`<br>
`185.199.109.153`<br>
`185.199.110.153`<br>
`185.199.111.153`


**IMPORTANT: DO NOT put all four Destination I.P addresses on the same hostname value**. Rather you should be creating four seperate `A Records`. You can leave the `hostname` option blank. By the end of the process, you should have something like this:

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215397362-1498bec5-9e45-4877-86b8-98a9845b7ece.png">

This is the last time you're going to be on your domain provider admin panel for this tutorial. However, you also have the option to add a `CNAME` if you wish. What this can do is redirect you to your custom domain if they type in your old `github.io` domain.

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215399275-4c8d9177-9f7b-45c9-a8c1-9b1d522611bd.png">

### Step Three: Configure custom name inside github repository with your new domain name

This part's probably the easiest step. Go to the `settings` of the repository that has your web development files (`your-repo.github.io`). Then click on `pages`, where you'll find a custom domain option. Simply input your domain, press save, and you're good to go!

> <img style="width: 500px" src="https://user-images.githubusercontent.com/98366672/215402922-4b41d197-bde3-4e67-92a2-073411b4fc3a.png">

This has been your tutorial on launching your own custom domain. https://cyberlions.tech/
