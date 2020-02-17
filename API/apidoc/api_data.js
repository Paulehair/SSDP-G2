define({ "api": [
  {
    "type": "post",
    "url": "/employees",
    "title": "Create one employee",
    "name": "createEmployee",
    "group": "Employees",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "User access only",
        "description": "<p>This operation belongs to to the admin group.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sector",
            "description": "<p>Sector of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"jdoe@example.com\",\n  \"password\": \"password\",\n  \"role\": \"employee\",\n  \"sector\": \"78/92\",\n  \"address\": \"123 Main St\",\n  \"phone\": \"+33178674503\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/employeeRoutes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "delete",
    "url": "/employees/:id",
    "title": "Delete one employee",
    "name": "deleteOneEmployee",
    "group": "Employees",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "User access only",
        "description": "<p>This operation belongs to to the admin group.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of employee</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sector",
            "description": "<p>Sector of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"jdoe@example.com\",\n  \"password\": \"password\",\n  \"role\": \"employee\",\n  \"sector\": \"78/92\",\n  \"address\": \"123 Main St\",\n  \"phone\": \"+33178674503\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/employeeRoutes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "get",
    "url": "/employees",
    "title": "Request list of all employees",
    "name": "getEmployees",
    "group": "Employees",
    "version": "0.1.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"jdoe@example.com\",\n  \"password\": \"password\",\n  \"role\": \"employee\",\n  \"sector\": \"78/92\",\n  \"address\": \"123 Main St\",\n  \"phone\": \"+33178674503\"\n},\n{\n  ...\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/employeeRoutes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "get",
    "url": "/employees/:id",
    "title": "Request employee information",
    "name": "getOneEmployee",
    "group": "Employees",
    "version": "0.1.0",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sector",
            "description": "<p>Sector of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"jdoe@example.com\",\n  \"password\": \"password\",\n  \"role\": \"employee\",\n  \"sector\": \"78/92\",\n  \"address\": \"123 Main St\",\n  \"phone\": \"+33178674503\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/employeeRoutes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "patch",
    "url": "/employees/:id",
    "title": "Update employee information",
    "name": "updateOneEmployee",
    "group": "Employees",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "User access only",
        "description": "<p>This operation belongs to to the admin group.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of employee</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Hashed password of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sector",
            "description": "<p>Sector of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of employee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstName\": \"John\",\n  \"lastName\": \"Doe\",\n  \"email\": \"jdoe@example.com\",\n  \"password\": \"password\",\n  \"role\": \"employee\",\n  \"sector\": \"78/92\",\n  \"address\": \"123 Main St\",\n  \"phone\": \"+33178674503\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/employeeRoutes.js",
    "groupTitle": "Employees"
  },
  {
    "type": "get",
    "url": "/exportPlanning",
    "title": "Request planning file",
    "name": "getPlanning",
    "group": "Planning",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sector",
            "description": "<p>Name of the sector</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "planning",
            "description": "<p>Planning for a week by sector</p>"
          }
        ]
      }
    },
    "filename": "routes/fileRoutes.js",
    "groupTitle": "Planning"
  }
] });
