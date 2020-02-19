# API

## API Documentation

Automatically generate api documentation with comments.
Run the following command ==from API folder==

<code>
	yarn apidoc -i ./routes -o ./apidoc
</code>

You can see full api documentation [here](http://35.180.253.143:9000/api/documentation/)

## Architecture

```sequence
Back Office or Mobile App->API: 1 - Request URL to API
Note right of API: 2 - API process request
API->Database: 3 - Request Data
Database-->API: 4 - Send Data
API->Back Office or Mobile App: 5 - Send Data to front
```

## Data Modelling

## Authentication principles

## Author

Ketsia Pedro
