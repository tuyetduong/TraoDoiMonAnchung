define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login employee",
    "description": "<p>API Login employee</p>",
    "version": "0.0.1",
    "name": "login",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n    \"code\": \"NDH123\",\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>mã nhân viên</p>"
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
            "field": "token",
            "description": "<p>Token generate when login successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVcmwiOiIiLCJyb2xlIjoiVXNlciIsIl9pZCI6IjVjMWI2MjdmYmNhNDI3M2EwODYzMGNhMCIsInVzZXJuYW1lIjoiTmd1eWVuRHV5SHV5IiwiZnVsbG5hbWUiOiJOZ3V5ZW5EdXlIdXkiLCJjb2RlIjoiTjEyMzQ1NiIsIl9fdiI6MCwiaWQiOiI1YzFiNjI3ZmJjYTQyNzNhMDg2MzBjYTAiLCJpYXQiOjE1NDU4NzkxMDYsImV4cCI6MTU0NjQ4MzkwNn0.hkFrpIMUpioDYudNfJzOEs27wlW6DZ_HZG1ylzFawYg\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 402": [
          {
            "group": "Response Body 402",
            "type": "String",
            "optional": false,
            "field": "Error-402-Response",
            "description": "<p>User is not activated,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>Error Account not found or not exist,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-402-Response Example:",
          "content": "{\n    \"success\": false,\n    \"message\": \"Error: Wrong information\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": "{\n    \"success\": false,\n    \"message\": \"Error: Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/auth/auth.route.ts",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/checkin/create-checkin",
    "title": "Create checkin",
    "description": "<p>API create checkin</p>",
    "version": "0.0.1",
    "name": "create",
    "group": "Checkin",
    "parameter": {
      "examples": [
        {
          "title": "Request from data  Example ",
          "content": "{\n      \"employeeId\":\"5c177d09b5fbec3b90c59fbc\",\n      \"location\":{\n          \"lat\":10.1122222,\n          \"lng\":11.2322222\n      },\n      \"address\":\"57 ql13, abc,abc,abc\",\n      \"storeId\":\"\",\n      \"note\":\"cua hang abc\",\n      \"photoUrl\":\"\"\n  }",
          "type": "json"
        },
        {
          "title": "Request from  Example",
          "content": "{\n    files:\"file hinh\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>employeeId</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "location",
            "description": "<p>location</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "location.lng",
            "description": "<p>lng</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "storeId",
            "description": "<p>storeId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoUrl",
            "description": "<p>photoUrl emtpy</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>location</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoUrl",
            "description": "<p>link of photo</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "checkinDate",
            "description": "<p>checkinDate checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>employeeId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "storeId",
            "description": "<p>storeId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    {\n        \"location\": {\n            \"lat\": 10.8119258,\n            \"lng\": 106.7124924\n        },\n        \"address\": \"57 ql13, abc,abc,abc\",\n        \"note\": \"cua hang abc\",\n        \"photoUrl\": \"static/photo/photoUrlb0504f2c-d0f8-49f5-84c6-5de5d50cde89.jpg\",\n        \"checkinDate\": \"2018-12-26T09:12:36.717Z\",\n        \"_id\": \"5c234631508f7a2118a1f532\",\n        \"employeeId\": \"5c177d09b5fbec3b90c59fbc\",\n        \"storeId\": \"5c22f33deeebcd1828cd61fa\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/checkin/checkin.route.ts",
    "groupTitle": "Checkin"
  },
  {
    "type": "post",
    "url": "api/checkin/gets-checkin",
    "title": "get list checkin",
    "description": "<p>API get list checkin</p>",
    "version": "0.0.1",
    "name": "getList",
    "group": "Checkin",
    "parameter": {
      "examples": [
        {
          "title": "Request  data  Example ",
          "content": "{\n      \"search\":\"\",\n      \"page\":1,\n      \"amount\":3,\n      \"typesort\":\"1\"\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typesort",
            "description": "<p>typesort  1 to specify ascending order.-1 to specify descending order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>data array checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>total record</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>totalPage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SearchText",
            "description": "<p>SearchText</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n\"data\": [\n    {\n            \"location\": {\n                \"lat\": 10.1122222,\n                \"lng\": 11.2322222\n            },\n            \"address\": \"57 ql13, abc,abc,abc\",\n            \"note\": \"cua hang abc\",\n            \"photoUrl\": \"static/photo/photoUrlf981cb21-3380-431f-a139-b06b9aa84608.jpg\",\n            \"checkinDate\": \"2018-12-19T10:22:20.462Z\",\n            \"_id\": \"5c1a1c64af949d3c14f0c704\",\n            \"employeeId\": {\n                \"_id\": \"5c177d09b5fbec3b90c59fbc\",\n                \"name\": \"nguyenhuy\",\n                \"id\": \"5c177d09b5fbec3b90c59fbc\"\n            },\n            \"storeId\": {\n                \"name\": \"Đại lý sơn Mylor18\",\n                \"_id\": \"5c1a1c40af949d3c14f0c703\",\n                \"__v\": 0\n            },\n            \"__v\": 0\n        },\n        {\n            \"location\": {\n                \"lat\": 10.1122222,\n                \"lng\": 11.2322222\n            },\n            \"address\": \"57 ql13, abc,abc,abc\",\n            \"note\": \"cua hang abc\",\n            \"photoUrl\": \"static/photo/photoUrlecadaeba-124c-4504-aab9-2442da5d41c0.jpg\",\n            \"checkinDate\": \"2018-12-19T10:22:20.462Z\",\n            \"_id\": \"5c1a1c67af949d3c14f0c705\",\n            \"employeeId\": {\n                \"_id\": \"5c177d09b5fbec3b90c59fbc\",\n                \"name\": \"nguyenhuy\",\n                \"id\": \"5c177d09b5fbec3b90c59fbc\"\n            },\n            \"storeId\": {\n                \"name\": \"Đại lý sơn Mylor18\",\n                \"_id\": \"5c1a1c40af949d3c14f0c703\",\n                \"__v\": 0\n            },\n            \"__v\": 0\n        },\n        {\n            \"location\": {\n                \"lat\": 10.1122222,\n                \"lng\": 11.2322222\n            },\n            \"address\": \"57 ql13, abc,abc,abc\",\n            \"note\": \"cua hang abc\",\n            \"photoUrl\": \"static/photo/photoUrleebbfba8-f431-4f63-8218-3c73ade7e09a.jpg\",\n            \"checkinDate\": \"2018-12-19T10:22:20.462Z\",\n            \"_id\": \"5c1a1c68af949d3c14f0c706\",\n            \"employeeId\": {\n                \"_id\": \"5c177d09b5fbec3b90c59fbc\",\n                \"name\": \"nguyenhuy\",\n                \"id\": \"5c177d09b5fbec3b90c59fbc\"\n            },\n            \"storeId\": {\n                \"name\": \"Đại lý sơn Mylor18\",\n                \"_id\": \"5c1a1c40af949d3c14f0c703\",\n                \"__v\": 0\n            },\n            \"__v\": 0\n        }\n    ],\n    \"total\": 5,\n    \"page\": 1,\n    \"amount\": 3,\n    \"totalPage\": 2,\n    \"SearchText\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/checkin/checkin.route.ts",
    "groupTitle": "Checkin"
  },
  {
    "type": "Get",
    "url": "api/checkin/get-checkin/:id",
    "title": "get by id",
    "description": "<p>API get list checkin</p>",
    "version": "0.0.1",
    "name": "get_by_id",
    "group": "Checkin",
    "parameter": {
      "examples": [
        {
          "title": "Request  param  Example ",
          "content": "{\n     http://localhost:3000/api/checkin/get-checkin/5c19e8d4761f8a06c417328a\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id checkin</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "location",
            "description": "<p>location</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoUrl",
            "description": "<p>link of photo</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "checkinDate",
            "description": "<p>checkinDate checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "employeeId",
            "description": "<p>employeeId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "storeId",
            "description": "<p>storeId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"location\": {\n        \"lat\": 10.1122222,\n        \"lng\": 11.2322222\n    },\n    \"address\": \"57 ql13, abc,abc,abc\",\n    \"note\": \"cua hang abc\",\n    \"photoUrl\": \"static/photo/photoUrlf981cb21-3380-431f-a139-b06b9aa84608.jpg\",\n    \"checkinDate\": \"2018-12-19T10:22:20.462Z\",\n    \"_id\": \"5c1a1c64af949d3c14f0c704\",\n    \"employeeId\": {\n        \"_id\": \"5c177d09b5fbec3b90c59fbc\",\n        \"name\": \"nguyenhuy\",\n        \"id\": \"5c177d09b5fbec3b90c59fbc\"\n    },\n    \"storeId\": {\n        \"name\": \"Đại lý sơn Mylor18\",\n        \"_id\": \"5c1a1c40af949d3c14f0c703\",\n        \"__v\": 0\n    },\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/checkin/checkin.route.ts",
    "groupTitle": "Checkin"
  },
  {
    "type": "post",
    "url": "api/checkin/recent-checkin",
    "title": "get list recent-checkin",
    "description": "<p>API get list checkin</p>",
    "version": "0.0.1",
    "name": "recent_checkin",
    "group": "Checkin",
    "parameter": {
      "examples": [
        {
          "title": "Request  data  Example ",
          "content": "{\n      \"search\":\"\",\n      \"page\":1,\n      \"amount\":3,\n      \"typesort\":\"1\"\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typesort",
            "description": "<p>typesort  1 to specify ascending order.-1 to specify descending order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>data array checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>total record</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>totalPage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SearchText",
            "description": "<p>SearchText</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"checkinDate\": \"2018-12-19T10:22:20.462Z\",\n            \"_id\": \"5c1a1c64af949d3c14f0c704\",\n            \"employeeId\": {\n                \"avatarUrl\": \"\",\n                \"role\": \"User\",\n                \"_id\": \"5c1b627fbca4273a08630ca0\",\n                \"username\": \"NguyenDuyHuy\",\n                \"fullname\": \"NguyenDuyHuy\",\n                \"id\": \"5c1b627fbca4273a08630ca0\"\n            },\n            \"storeId\": {\n                \"name\": \"Đại lý sơn Mylor18\",\n                \"_id\": \"5c1a1c40af949d3c14f0c703\",\n                \"__v\": 0\n            }\n        },\n        {\n            \"checkinDate\": \"2018-12-19T10:23:20.462Z\",\n            \"_id\": \"5c1a1c67af949d3c14f0c705\",\n            \"employeeId\": {\n                \"avatarUrl\": \"\",\n                \"role\": \"User\",\n                \"_id\": \"5c1b627fbca4273a08630ca0\",\n                \"username\": \"NguyenDuyHuy\",\n                \"fullname\": \"NguyenDuyHuy\",\n                \"id\": \"5c1b627fbca4273a08630ca0\"\n            },\n            \"storeId\": {\n                \"name\": \"Đại lý sơn Mylor18\",\n                \"_id\": \"5c1a1c40af949d3c14f0c703\",\n                \"__v\": 0\n            }\n        },\n        {\n            \"checkinDate\": \"2018-12-19T10:24:20.462Z\",\n            \"_id\": \"5c1a1c68af949d3c14f0c706\",\n            \"employeeId\": {\n                \"avatarUrl\": \"\",\n                \"role\": \"User\",\n                \"_id\": \"5c1b627fbca4273a08630ca0\",\n                \"username\": \"NguyenDuyHuy\",\n                \"fullname\": \"NguyenDuyHuy\",\n                \"id\": \"5c1b627fbca4273a08630ca0\"\n            },\n            \"storeId\": {\n                \"name\": \"Đại lý sơn Mylor18\",\n                \"_id\": \"5c1a1c40af949d3c14f0c703\",\n                \"__v\": 0\n            }\n        }\n    ],\n    \"total\": 3,\n    \"page\": 1,\n    \"amount\": 3,\n    \"totalPage\": 1,\n    \"SearchText\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/checkin/checkin.route.ts",
    "groupTitle": "Checkin"
  },
  {
    "type": "get",
    "url": "api/department/get-department/:id",
    "title": "get id Department",
    "description": "<p>API get info Department</p>",
    "version": "0.0.1",
    "name": "GetById",
    "group": "Department",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/department/get-department/5c24a3f6cbb2a447f0e8fcc1",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
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
            "field": "code",
            "description": "<p>code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"code\": \"A1\",\n    \"name\": \"Nhà 1\",\n    \"_id\": \"5c24a3f6cbb2a447f0e8fcc1\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/department/department.route.ts",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "api/trademark/create-department",
    "title": "create Department",
    "description": "<p>API create Department</p>",
    "version": "0.0.1",
    "name": "create",
    "group": "Department",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n     \"code\":\"A5\",\n     \"name\":\"Nhà 5\"\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code Department</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name Department</p>"
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
            "field": "code",
            "description": "<p>code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": \"A5\",\n    \"name\": \"Nhà 5\",\n    \"_id\": \"5c24aa1fcbb2a447f0e8fcc5\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>department is existed,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": "{\n  {\n        \"success\": false,\n        \"message\": \" department is existed\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/department/department.route.ts",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "api/department/delete-trademark/:id",
    "title": "delete id department",
    "description": "<p>API updateById</p>",
    "version": "0.0.1",
    "name": "delete_department",
    "group": "Department",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/department/delete-department/5c24583ef351611d9c666b33",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/department/department.route.ts",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "api/department/get-departments",
    "title": "get list Department",
    "description": "<p>API get list Department</p>",
    "version": "0.0.1",
    "name": "getList",
    "group": "Department",
    "parameter": {
      "examples": [
        {
          "title": "Request  data  Example ",
          "content": " {\n    \"search\":\"\",\n    \"page\":1,\n    \"amount\":2,\n    \"typesort\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typesort",
            "description": "<p>typesort  1 to specify ascending order.-1 to specify descending order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>data array checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>total record</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>totalPage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SearchText",
            "description": "<p>SearchText</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n         \"data\": [\n             {\n                 \"code\": \"A1\",\n                 \"name\": \"Nhà 1\",\n                 \"_id\": \"5c24a3f6cbb2a447f0e8fcc1\",\n                 \"__v\": 0\n             },\n             {\n                 \"code\": \"A2\",\n                 \"name\": \"Nhà 2\",\n                 \"_id\": \"5c24aa0acbb2a447f0e8fcc2\",\n                 \"__v\": 0\n             }\n         ],\n         \"total\": 5,\n         \"page\": 1,\n         \"amount\": 2,\n         \"totalPage\": 3,\n         \"SearchText\": \"\"\n     }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/department/department.route.ts",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "api/department/get-department/:id",
    "title": "update id department",
    "description": "<p>API updateById</p>",
    "version": "0.0.1",
    "name": "updateById",
    "group": "Department",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/department/update-department/5c24a3f6cbb2a447f0e8fcc1",
          "type": "json"
        },
        {
          "title": "Request Example",
          "content": "{\n      \"name\":\"Nhà 12345\"\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name trademark</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>code trademark</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/department/department.route.ts",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "api/employee/delete/:id",
    "title": "delete  Employee",
    "description": "<p>API delete store</p>",
    "version": "0.0.1",
    "name": "Deletebyid",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/employee/delete/5c2359276b55c1428067e19a",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "api/employee/information:id",
    "title": "get infor",
    "description": "<p>API get info employee</p>",
    "version": "0.0.1",
    "name": "GetById",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/employee/information/5c177d09b5fbec3b90c59fbc",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
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
            "field": "avatarUrl",
            "description": "<p>Avatar of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of employee ( User)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name name employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>mã nhân viên</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"avatarUrl\": \"\",\n    \"role\": \"User\",\n    \"_id\": \"5c177d09b5fbec3b90c59fbc\",\n    \"name\": \"nguyenhuy\",\n    \"code\": \"NDH123\",\n    \"__v\": 0,\n    \"id\": \"5c177d09b5fbec3b90c59fbc\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 401": [
          {
            "group": "Response Body 401",
            "type": "String",
            "optional": false,
            "field": "Error-401-Response",
            "description": "<p>Unauthoried,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "api/employee/informationbytoken",
    "title": "infor by token",
    "description": "<p>API get by token employee</p>",
    "version": "0.0.1",
    "name": "GetByToken",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "x-access-token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVcmwiOiIiLCJyb2xlIjoiVXNlciIsIl9pZCI6IjVjMTc3ZDA5YjVmYmVjM2I5MGM1OWZiYyIsIm5hbWUiOiJuZ3V5ZW5odXkiLCJjb2RlIjoiTkRIMTIzIiwiX192IjowLCJpZCI6IjVjMTc3ZDA5YjVmYmVjM2I5MGM1OWZiYyIsImlhdCI6MTU0NTIxNzU0MCwiZXhwIjoxNTQ1ODIyMzQwfQ.47r_GEh2B8XQ0dAT_DANSVrsLPlbOJZnHmU1S8sYu_U",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token when login</p>"
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
            "field": "avatarUrl",
            "description": "<p>Avatar of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of employee ( User)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name name employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>mã nhân viên</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"avatarUrl\": \"\",\n    \"role\": \"User\",\n    \"_id\": \"5c177d09b5fbec3b90c59fbc\",\n    \"name\": \"nguyenhuy\",\n    \"code\": \"NDH123\",\n    \"__v\": 0,\n    \"id\": \"5c177d09b5fbec3b90c59fbc\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 401": [
          {
            "group": "Response Body 401",
            "type": "String",
            "optional": false,
            "field": "Error-401-Response",
            "description": "<p>Unauthoried,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-402-Response Example:",
          "content": "      {\n              \"success\": false,\n              \"message\": \"invalid signature\"\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "api/employee/update-avatar/id",
    "title": "update file",
    "description": "<p>API update file</p>",
    "version": "0.0.1",
    "name": "UpdateAvatar",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n    files:file hinh\n}",
          "type": "json"
        },
        {
          "title": "Request url Example",
          "content": "http://localhost:3000/api/employee/updateinfo/5c1b14a93a07d02f501d8b0a",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": "<p>tue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>badrequest,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "api/employee/updateinfo/id",
    "title": "update infor",
    "description": "<p>API update info employee</p>",
    "version": "0.0.1",
    "name": "UpdateById",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/employee/updateinfo/5c1b14a93a07d02f501d8b0a\n{\n     \"fullname\":\"Nguyen duy huy\",\n     \"username\":\"NguyenDuyHuy\",\n     \"identityCard\":\"123465798\",\n     \"code\":\"NDH1234\"\n }",
          "type": "json"
        },
        {
          "title": "Request url Example",
          "content": "http://localhost:3000/api/employee/updateinfo/5c1b14a93a07d02f501d8b0a",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>identityCard</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code(ma nhan vien)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": "<p>tue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>badrequest,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/employee/create-employee",
    "title": "Create employee",
    "description": "<p>API create employee</p>",
    "version": "0.0.1",
    "name": "create",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n       \t\"username\":\"abcd\",\n         \"fullname\":\"abcd\",\n         \"code\":\"N1234\",\n         \"password\":\"2221122\",\n         \"identityCard\":\"1212122\"\n   }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username employee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname employee</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>mã nhân viên</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
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
            "field": "Payload.avatarUrl",
            "description": "<p>Avatar of employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Payload.role",
            "description": "<p>Role of employee (Admin or User)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Payload._id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name name employee</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>mã nhân viên</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"avatarUrl\": \"\",\n    \"role\": \"User\",\n    \"_id\": \"5c178c2b2c6a3d2d6ca3d71d\",\n    \"name\": \"nguyenhuy1\",\n    \"code\": \"NDH123\",\n    \"__v\": 0,\n    \"id\": \"5c178c2b2c6a3d2d6ca3d71d\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>User is existed,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": "      {\n          \"success\": false,\n          \"message\": \"User is existed\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "api/employee/getliststaff",
    "title": "get list employee",
    "description": "<p>API get list employee</p>",
    "version": "0.0.1",
    "name": "list_employee",
    "group": "Employee",
    "parameter": {
      "examples": [
        {
          "title": "Request  data  Example ",
          "content": "{\n      \"search\":\"\",\n      \"page\":1,\n      \"amount\":3,\n      \"typesort\":\"1\"\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typesort",
            "description": "<p>typesort  1 to specify ascending order.-1 to specify descending order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>data array checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>total record</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>totalPage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SearchText",
            "description": "<p>SearchText</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"data\": [\n          {\n                \"avatarUrl\": \"\",\n                \"role\": \"User\",\n                \"_id\": \"5c1b627fbca4273a08630ca0\",\n                \"username\": \"NguyenDuyHuy\",\n                \"fullname\": \"NguyenDuyHuy\",\n                \"code\": \"N123456\",\n                \"password\": \"$2a$10$4nJyTpO3HfUOck0vOoMpxunR4tIJpNoQf8Zt615aGyJqN8kuKhtvC\",\n                \"salt\": \"$2a$10$4nJyTpO3HfUOck0vOoMpxu\",\n                \"__v\": 0,\n                \"id\": \"5c1b627fbca4273a08630ca0\"\n          }\n       ],\n       \"total\": 1,\n       \"page\": 1,\n       \"amount\": 2,\n       \"totalPage\": 2,\n       \"SearchText\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/employee/employee.route.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "delete",
    "url": "api/store/delete-store/:id",
    "title": "delete  store",
    "description": "<p>API delete store</p>",
    "version": "0.0.1",
    "name": "Deletebyid",
    "group": "Store",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/store/delete-store/5c22f335eeebcd1828cd61f9",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/store/store.route.ts",
    "groupTitle": "Store"
  },
  {
    "type": "get",
    "url": "api/store/get-store/:id",
    "title": "get id store",
    "description": "<p>API get info store</p>",
    "version": "0.0.1",
    "name": "GetById",
    "group": "Store",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/store/get-store/5c22f33deeebcd1828cd61fa",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "location",
            "description": "<p>location store</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "location.lng",
            "description": "<p>lng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id store</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"location\": {\n         \"lat\": 10.8119258,\n         \"lng\": 106.7124924\n     },\n     \"name\": \"Đại lý sơn Mylor2\",\n     \"address\": \"Morning Star Plaza, 57 QL13, Phường 26, Bình Thạnh, Hồ Chí Minh, Việt Nam\",\n     \"_id\": \"5c22f33deeebcd1828cd61fa\",\n     \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/store/store.route.ts",
    "groupTitle": "Store"
  },
  {
    "type": "put",
    "url": "api/store/update-store/:id",
    "title": "update  store",
    "description": "<p>API update store</p>",
    "version": "0.0.1",
    "name": "Updatebyid",
    "group": "Store",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/store/update-store/5c22f32beeebcd1828cd61f8",
          "type": "json"
        },
        {
          "title": "Request Example",
          "content": "{\n    \"name\":\"Đại lý sơn Mylor1\",\n    \"address\":\"488A, Điện Biên Phủ, P.21, Q.Bình Thạnh, Điện Biên Phủ, Phường 21, Bình Thạnh, Hồ Chí Minh, Việt Nam\",\n    \"location\":{\n        \"lat\":10.8012718,\n        \"lng\":106.7127239\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>address store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "location",
            "description": "<p>location store</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location.lng",
            "description": "<p>lng</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/store/store.route.ts",
    "groupTitle": "Store"
  },
  {
    "type": "post",
    "url": "/api/store/create-store",
    "title": "Create store",
    "description": "<p>API create store</p>",
    "version": "0.0.1",
    "name": "create",
    "group": "Store",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n    \"name\":\"Đại lý sơn Mylor1\",\n    \"address\":\"488A, Điện Biên Phủ, P.21, Q.Bình Thạnh, Điện Biên Phủ, Phường 21, Bình Thạnh, Hồ Chí Minh, Việt Nam\",\n    \"location\":{\n        \"lat\":10.8012718,\n        \"lng\":106.7127239\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location store</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "location.lng",
            "description": "<p>lng</p>"
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
            "field": "location",
            "description": "<p>location store</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location.lat",
            "description": "<p>lat</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "location.lng",
            "description": "<p>lng</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name store</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address store</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"location\": {\n        \"lat\": 10.8012718,\n        \"lng\": 106.7127239\n    },\n    \"name\": \"Đại lý sơn Mylor1\",\n    \"address\": \"488A, Điện Biên Phủ, P.21, Q.Bình Thạnh, Điện Biên Phủ, Phường 21, Bình Thạnh, Hồ Chí Minh, Việt Nam\",\n    \"_id\": \"5c2305e003ff8342e488e65b\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>Store is existed,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": "{\n   {\n        \"success\": false,\n        \"message\": \"Store is existed\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/store/store.route.ts",
    "groupTitle": "Store"
  },
  {
    "type": "post",
    "url": "/api/store/get-stores",
    "title": "get list store",
    "description": "<p>API get list store</p>",
    "version": "0.0.1",
    "name": "getList",
    "group": "Store",
    "parameter": {
      "examples": [
        {
          "title": "Request  data  Example ",
          "content": "{\n      \"search\":\"\",\n      \"page\":1,\n      \"amount\":3,\n      \"typesort\":\"1\"\n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typesort",
            "description": "<p>typesort  1 to specify ascending order.-1 to specify descending order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>data array checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>total record</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>totalPage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SearchText",
            "description": "<p>SearchText</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  {\n    \"data\": [\n        {\n            \"location\": {\n                \"lat\": 10.8012718,\n                \"lng\": 106.7127239\n            },\n            \"name\": \"Đại lý sơn Mylor1\",\n            \"address\": \"488A, Điện Biên Phủ, P.21, Q.Bình Thạnh, Điện Biên Phủ, Phường 21, Bình Thạnh, Hồ Chí Minh, Việt Nam\",\n            \"_id\": \"5c2305e003ff8342e488e65b\",\n            \"__v\": 0\n        },\n        {\n            \"location\": {\n                \"lat\": 10.8485393,\n                \"lng\": 106.773586\n            },\n            \"name\": \"Đại lý sơn Mylor2\",\n            \"address\": \"Cầu vượt ngã tư Thủ Đức, Hiệp Phú, Quận 9, Hồ Chí Minh, Việt Nam\",\n            \"_id\": \"5c22f335eeebcd1828cd61f9\",\n            \"__v\": 0\n        }\n    ],\n    \"total\": 3,\n    \"page\": 1,\n    \"amount\": 2,\n    \"totalPage\": 2,\n    \"SearchText\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/store/store.route.ts",
    "groupTitle": "Store"
  },
  {
    "type": "get",
    "url": "api/trademark/get-trademark/:id",
    "title": "get id trademark",
    "description": "<p>API get info trademark</p>",
    "version": "0.0.1",
    "name": "GetById",
    "group": "Trademark",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/trademark/get-trademark/5c24583ef351611d9c666b33",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
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
            "field": "code",
            "description": "<p>code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"code\": \"S2\",\n      \"name\": \"Sơn 2\",\n      \"_id\": \"5c24583ef351611d9c666b33\",\n      \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/trademark/trademark.route.ts",
    "groupTitle": "Trademark"
  },
  {
    "type": "post",
    "url": "api/trademark/create-trademark",
    "title": "create Trademark",
    "description": "<p>API create Trademark</p>",
    "version": "0.0.1",
    "name": "create",
    "group": "Trademark",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "{\n    \"code\":\"S5\",\n    \"name\":\"Sơn 5\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>code trademark</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name trademark</p>"
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
            "field": "code",
            "description": "<p>code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>_id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": \"S5\",\n    \"name\": \"Sơn 5\",\n    \"_id\": \"5c247ceb1980eb2d94a86429\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>trademark is existed,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": "{\n  {\n        \"success\": false,\n        \"message\": \" trademark is existed\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/trademark/trademark.route.ts",
    "groupTitle": "Trademark"
  },
  {
    "type": "delete",
    "url": "api/trademark/delete-trademark/:id",
    "title": "delete id trademark",
    "description": "<p>API updateById</p>",
    "version": "0.0.1",
    "name": "delete_trademark",
    "group": "Trademark",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/trademark/delete-trademark/5c24583ef351611d9c666b33",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/trademark/trademark.route.ts",
    "groupTitle": "Trademark"
  },
  {
    "type": "post",
    "url": "/api/trademark/get-trademarks",
    "title": "get list trademark",
    "description": "<p>API get list trademark</p>",
    "version": "0.0.1",
    "name": "getList",
    "group": "Trademark",
    "parameter": {
      "examples": [
        {
          "title": "Request  data  Example ",
          "content": " {\n    \"search\":\"\",\n    \"page\":1,\n    \"amount\":2,\n    \"typesort\":\"1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>search</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typesort",
            "description": "<p>typesort  1 to specify ascending order.-1 to specify descending order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "data",
            "description": "<p>data array checkin</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "total",
            "description": "<p>total record</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>page</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "amount",
            "description": "<p>amount</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>totalPage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "SearchText",
            "description": "<p>SearchText</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"data\": [\n          {\n              \"code\": \"S1\",\n              \"name\": \"Sơn 1\",\n              \"_id\": \"5c245838f351611d9c666b32\",\n              \"__v\": 0\n          },\n          {\n              \"code\": \"S2\",\n              \"name\": \"Sơn 2\",\n              \"_id\": \"5c24583ef351611d9c666b33\",\n              \"__v\": 0\n          }\n      ],\n      \"total\": 5,\n      \"page\": 1,\n      \"amount\": 2,\n      \"totalPage\": 3,\n      \"SearchText\": \"\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/trademark/trademark.route.ts",
    "groupTitle": "Trademark"
  },
  {
    "type": "put",
    "url": "api/trademark/get-trademark/:id",
    "title": "update id trademark",
    "description": "<p>API updateById</p>",
    "version": "0.0.1",
    "name": "updateById",
    "group": "Trademark",
    "parameter": {
      "examples": [
        {
          "title": "Request Example",
          "content": "http://localhost:3000/api/trademark/update-trademark/5c24583ef351611d9c666b33",
          "type": "json"
        },
        {
          "title": "Request Example",
          "content": "{\n      \"name\": \"Sơn 2\",  \n  }",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>name trademark</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>code trademark</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Response Body 400": [
          {
            "group": "Response Body 400",
            "type": "String",
            "optional": false,
            "field": "Error-400-Response",
            "description": "<p>bad request,</p>"
          }
        ],
        "Response Body 404": [
          {
            "group": "Response Body 404",
            "type": "String",
            "optional": false,
            "field": "Error-404-Response",
            "description": "<p>bad request,</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-400-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Id was wrong\"\n}",
          "type": "json"
        },
        {
          "title": "Error-404-Response Example:",
          "content": " {\n    \"success\": false,\n    \"message\": \"Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/trademark/trademark.route.ts",
    "groupTitle": "Trademark"
  }
] });
