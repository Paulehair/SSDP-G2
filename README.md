# SAMU SOCIAL DE PARIS - P2020-G2

School project for the use of Le SAMU Social de Paris

-   Auto-generated Table of Content
    [ToC]

## :rocket: Getting started

### Prerequisites

Have docker and docker-compose installed

### Installing for development

You'll need to install dependancies and write your database access in .env file
:::info
:pushpin: To get your access to database ➜ ask the team !
:::

Run the following commands in project

<code>cd API</code>
<code>yarn install</code>
<code>cd ../back-office</code>
<code>yarn install</code>
<code>cd ..</code>
<code>touch .env</code>
<code>echo "DB_PASSWORD=db_password\n DB_USER=db_user" > .env</code>
<code>docker-compose up</code>

Start working !:tada:

---

## About API

### API Documentation

Automatically generate api documentation with comments.
Run the following command ==from API folder==

<code>
	yarn apidoc -i ./routes -o ./apidoc
</code>

You can see the api documentation [here](http://35.180.253.143:9000/api/documentation/)

### Architecture

```sequence
Back Office or Mobile App->API: 1 - Request URL to API
Note right of API: 2 - API process request
API->Database: 3 - Request Data
Database-->API: 4 - Send Data
API->Back Office or Mobile App: 5 - Send Data to front
```

## Deployment

### Terraform

See documentation in [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/terraform)

### Ansible

See documentation in [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/ansible)

## :link: Built with

-   Docker
-   Terraform
-   Ansible
-   Express
-   Mongoose
-   React
-   ESLint
-   Prettier
-   apiDoc
-   JEST
-   JWT
-   Styled Components
-   Storybook

## Authors

-   [Paule Herman](https://github.com/Paulehair) - cheffe de projet, devops et développeuse back
-   [Marion Ott](https://github.com/marion-ott) - développeuse front et back
-   [Anthony Reynaud](https://github.com/ynohtn) - développeur front
-   [Simon Soleau](https://github.com/SoleauSimon) - développeur front
-   [Ketsia Pedro](https://github.com/faithpedro) - développeuse back

## Licence
