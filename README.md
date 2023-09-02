<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="InstaYA Package Pickup Platform" />

&#xa0;

  <!-- <a href="https://instayapackagepickupplatform.netlify.app">Demo</a> -->
</div>

<h1 align="center">InstaYA Package Pickup Platform</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/forgionyc/instaya-package-pickup-platform?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/forgionyc/instaya-package-pickup-platform?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/forgionyc/instaya-package-pickup-platform?color=56BEB8">

  <!-- <img alt="License" src="https://img.shields.io/github/license/forgionyc/instaya-package-pickup-platform?color=56BEB8"> -->

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/forgionyc/instaya-package-pickup-platform?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/forgionyc/instaya-package-pickup-platform?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/forgionyc/instaya-package-pickup-platform?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  InstaYA Package Pickup Platform 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <!-- <a href="#sparkles-features">Features</a> &#xa0; | &#xa0; -->
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/forgionyc" target="_blank">Author</a>
</p>

<br>

## :dart: About

Spearheaded the development and deployment of InstaYA, a comprehensive package pickup platform. Utilizing a microservices architecture, I created a robust backend with a RESTful API using Node.js and a dynamic frontend using React.js. The platform was designed for company employees, granting access via popular web browsers such as Chrome and Firefox. Employees could log in with their credentials to access features like package creation, updates, and listings. Leveraging Docker, the application was deployed with two containers—one for the backend and another for the frontend—ensuring scalability to meet evolving company needs. This deployment strategy streamlined maintenance, facilitated continuous integration of new features, and significantly enhanced the company's efficiency and productivity.

Login
![image](https://user-images.githubusercontent.com/113073942/204686590-4adba4de-e26b-4d17-9458-c2be1dba0c02.png)

Visualización ordenes creadas
![image](https://user-images.githubusercontent.com/113073942/204686487-f4351ed5-47d2-4ac8-9d50-1f6b7bb0b29f.png)

Creación de orden
![image](https://user-images.githubusercontent.com/113073942/204686649-b687d006-685c-48b3-8baf-b7c933b938b5.png)

## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [React](https://react.dev/)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Docker](https://www.docker.com/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/forgionyc/instaya-package-pickup-platform

# Access
$ cd instaya-package-pickup-platform

# Build the docker images for the backend and the frontend
$ docker build -t backend/instaya . y docker build -t frontend/instaya .

# Run the project
$ docker run -d -p 5000:5000 backend/instaya y docker run -d -p 3000:3000 frontend/instaya

# The server will initialize in the <http://localhost:3000> for the frontend and <http://localhost:5000> for the backend
```

## :memo:

Made with :heart: by <a href="https://github.com/forgionyc" target="_blank">Carlos Forgiony</a>

&#xa0;

<a href="#top">Back to top</a>
