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

See documentation in [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/API)

---

## About back office

See documentation in [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/back-office)

---

## Deployment

### Docker

#### Docker Compose

##### Development

You can find a docker-compose.yml dedicated for development environment at the root project. The API is running with an Atlas Mongodb database instance.

##### Production

If you want to run project locally in production environment, you can use docker-compose-prod.yml. On production environment, the database is running on a mongo container.

To import all data on mongo container use route
<code>localhost:9000/api/data/import</code>

You will need a .env.production.local file with the environment variables **DB_PASSWORD** and **DB_USER** with whatever values you want to set. You can find the docker-compose and .env files that will be copied on server in the ansible folder ➜ [here](https://github.com/Paulehair/SSDP-G2/blob/DEV/ansible/roles/webapp/templates).

#### Dockerfiles

##### API

We build API image using the node:12 image version available on Dockerhub. The only difference is we use a script [here](https://github.com/Paulehair/SSDP/API/entrypoint.sh) as an entrypoint to replace the API endpoint for development by the one for production.

##### Back Office

We base our back office image on node:alpine and then copy it on an nginx one. The configuration file for nginx is directly copied from project [here](https://github.com/Paulehair/SSDP/backoffice/nginx/nginx.conf) to /etc/nginx/conf.d while building the image.

As in API Dockerfile, we use a script to replaces the API development endpoint by the one for production.

### Terraform

See documentation in [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/terraform)

### Ansible

See documentation in [here](https://github.com/Paulehair/SSDP-G2/tree/DEV/ansible)

---

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

-   [Paule Herman](https://github.com/Paulehair) - project manager, devops et back development
-   [Marion Ott](https://github.com/marion-ott) - front and back end developer
-   [Anthony Reynaud](https://github.com/ynohtn) - front end developer
-   [Simon Soleau](https://github.com/SoleauSimon) - front end developer
-   [Ketsia Pedro](https://github.com/faithpedro) - front end developer
