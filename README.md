## Deploying your app to Heroku

[Heroku Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
```sh
$ brew install heroku
```

2. Login to Heroku through the command line using the heroku command:
```sh
$ heroku login
Enter your Heroku credentials.
Email: zeke@example.com
Password:
...
```

3. create heroku app:
```sh
$ heroku create heroku-test-demo
```

4. deploy to heroku:
```sh
$ git push heroku master
```

5. open your app in the browser:
```sh
$ heroku open
```

#### What is PaaS?

#### Why is it useful to be able to deploy your code to a cloud platform, rather than running it locally?

#### What services are there that can provide you with a platform for your code? Heroku is a good start, but try to find some others.

- Heroku
- Microsoft Azure (serves 65% of Fortune 500 companies)
- Linode (high-performance SSD Linux servers)
-
