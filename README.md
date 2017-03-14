## Heroku

The Heroku Command Line Interface (CLI), formerly known as the Heroku Toolbelt, is a tool for creating and managing Heroku apps from the command line / shell of various operating systems.

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

PAAS usually refers to a service that takes care of the underlying hardware and OS that comes with building a web application. As developers, these platforms allow us to easily build or prototype applications without handling any hardware or configuring servers.

PaaS is a set of services aimed at developers that helps them develop and test apps without having to worry about the underlying infrastructure.

a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.

- [What is PaaS and why does it matter?](http://www.networkworld.com/article/2163430/cloud-computing/paas-primer--what-is-platform-as-a-service-and-why-does-it-matter-.html)
- [What is PaaS in cloud cloud-computing?](http://www.dummies.com/programming/cloud-computing/hybrid-cloud/what-is-platform-as-a-service-paas-in-cloud-computing/)

#### Why is it useful to be able to deploy your code to a cloud platform, rather than running it locally?

#### What services are there that can provide you with a platform for your code? Heroku is a good start, but try to find some others.

**Advantages of Heroku:**


**Alternatives:**
- [Appfog](https://www.ctl.io/appfog/)
- [Docker Cloud](https://cloud.docker.com/)



#### Resources:
- [Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli)
- [Heroku Getting Started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
