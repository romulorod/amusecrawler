# Welcome to AmuseCrawler!

## This Crawler was developed on amusement purposes to spam your friends email.

<hr />
<details>
<summary>
What it does on the background:
</summary>

<br />

- It will automatically browse google images, get img tags, search for it src links.

- If it's a valid https image link it will send 20 emails each with one image to your friends email set on --email on run command, using your email set on .env file.

* It searchs google images using the label you specified on run command
* 
</details>
<hr />

<details>
<summary>
Pre-Requisites:
</summary>

<br />

- You must allow google to be accessed through third-parties apps, click on the link below and activate it.

<br />

https://myaccount.google.com/lesssecureapps?rapt=AEjHL4P7O6aYHw-8Dnyx8mocOmj_GtEJMUjo1Cka19i41rcwTj0c2tK5xtttK6dDtNtC3aaXw4rmNrfeFUScqRhYbbWKcW75rg

</details>
<hr />

<details>
<summary>
Unlock Captcha:
</summary>

<br />

- This link is to unlock captcha if you get error code: 'EAUTH' with response: '454 4.7.0 Too many login attempts, please try again later

https://accounts.google.com/b/0/DisplayUnlockCaptcha

</details>

<hr/>

<details>
<summary>
How to install:
</summary>

<br />

- To install this project you must clone it using "git clone https://github.com/romulorod/learning-nextjs.git"

- Then you must install the dependencies using "npm install"

- You need to copy .env.sample file to a .env and set your email and password in it.

- You need to pass 2 flags in order to initialize the project:

- Label is the text you wanna search on the web. You can split it using "," as in "cars, cats, dogs" or spaces as in "apple tree".

- Email is your friends email you wanna spam.
- 
</details>
<hr />

<details>
<summary>
How to Execute:
</summary>

<br />

```node crawl --label="cars, cats, apple tree" --email="myfriend@email.com"```

</details>

<br />

