# SAMU SOCIAL DE PARIS - P2020-G2

School project for the use of Le SAMU Social de Paris

-   Auto-generated Table of Content
    [ToC]

## :rocket: Getting started

### Prerequisites

Have docker and docker-compose installed

### Installing for development

You'll need to install dependancies and write your database access in .env file

:pushpin: To get your access to database ➜ ask the team !

Run the following commands in project

```
cd API
yarn install
cd ../back-office
yarn install
cd ..
touch .env
echo "DB_PASSWORD=db_password\n DB_USER=db_user" > .env
docker-compose up
```

Start working !:tada:

---

## About API

See [documentation](https://github.com/Paulehair/SSDP-G2/tree/DEV/API)

---

## About back office

See [documentation](https://github.com/Paulehair/SSDP-G2/tree/DEV/back-office)

---

## Deployment

### Docker

#### Docker Compose

##### Development

You can find a docker-compose.yml for development environment at the root of the project. The API is running with an Atlas Mongodb database instance.

##### Production

If you want to run project locally from production environment, you can use docker-compose-prod.yml. From production environment, the database is running on a mongo container.

To import all data on mongo container use route
<code>localhost:9000/api/data/import</code>

You will need a .env.production.local file with the environment variables **DB_PASSWORD** and **DB_USER** with any values to set. The docker-compose and .env files to be copied on the remote server are in the ansible folder ➜ [here](https://github.com/Paulehair/SSDP-G2/blob/DEV/ansible/roles/webapp/templates).

#### Dockerfiles

##### API

We build API image using the node:12 image version available on Dockerhub.

This implies the use of the script [entrypoint.sh](https://github.com/Paulehair/SSDP/API/entrypoint.sh) as an entrypoint to replace the API endpoint for development environment instead of the one for production.

##### Back Office

The back-office image is built on node:alpine for the react app which is itself copied on an nginx image. The configuration file for nginx is directly copied from the [project](https://github.com/Paulehair/SSDP/backoffice/nginx/nginx.conf) to /etc/nginx/conf.d while the image is built.

To build the image run the following comment from back-office folder

<code>\$ docker build -t paulehair/ssdp-back-office --build-arg=BACKEND_URL=your_backend_url .</code>

### Terraform

See [documentation](https://github.com/Paulehair/SSDP-G2/tree/DEV/terraform)

### Ansible

See [documentation](https://github.com/Paulehair/SSDP-G2/tree/DEV/ansible)

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

-   [Paule Herman](https://github.com/Paulehair) - project leader, devops and back developer
-   [Marion Ott](https://github.com/marion-ott) - front and back end developer
-   [Anthony Reynaud](https://github.com/ynohtn) - front end developer
-   [Simon Soleau](https://github.com/SoleauSimon) - front end developer
-   [Ketsia Pedro](https://github.com/faithpedro) - back end developer
