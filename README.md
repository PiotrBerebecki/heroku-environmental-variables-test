## Heroku

The Heroku Command Line Interface (CLI), formerly known as the Heroku Toolbelt, is a tool for creating and managing Heroku apps from the command line / shell of various operating systems.

[Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli)

[Heroku Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

1. brew install heroku
2. Login to Heroku through the command line using the heroku command:
```sh
$ heroku login
Enter your Heroku credentials.
Email: zeke@example.com
Password:
...
```
3. Create heroku app:
```sh
$ heroku create heroku-test-demo
```
4. deploy to heroku:
```sh
$ git push heroku master
```
5. open the file in your browser:
```sh
$ heroku open
```

#### What is PaaS? 

#### Why is it useful to be able to deploy your code to a cloud platform, rather than running it locally?

#### What services are there that can provide you with a platform for your code? Heroku is a good start, but try to find some others.
