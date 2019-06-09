[
    {
        "id": "a39b79c1.6d1eb8",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/feed",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 80,
        "wires": [
            [
                "205ce7ef.7d5b68"
            ]
        ]
    },
    {
        "id": "208d98a.67a01e8",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": " <!DOCTYPE html>\n<html>\n    <head>\n        <link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n    </head>\n<body>\n\n\n<div class=\"container\">\n    <h1>Feed</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Name</th>\n                  <th scope=\"col\">Url</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td>{{name}}</td>\n                  <td>{{url}}</td>\n                  <td><a href=\"/monitor/feed/delete/{{rowid}}\" class=\"btn btn-outline-danger\">delete</a></td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table> \n        </div>\n        <div class=\"col-md-6\">\n            <form method=\"POST\" action=\"/monitor/feed\">\n                <label for=\"name\">Name</label>\n                <input class=\"form-control\" id=\"name\" name=\"name\">\n                <label for=\"url\">Url</label>\n                <input class=\"form-control\" id=\"url\" name=\"url\">\n                <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n            </form>\n        </div>\n    </div>\n</div>\n</body>\n</html> ",
        "output": "str",
        "x": 560,
        "y": 80,
        "wires": [
            [
                "7e709d76.c53394"
            ]
        ]
    },
    {
        "id": "7e709d76.c53394",
        "type": "http response",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 710,
        "y": 80,
        "wires": []
    },
    {
        "id": "205ce7ef.7d5b68",
        "type": "sqlite",
        "z": "3bbfc986.0e2a6e",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM feed",
        "name": "db",
        "x": 430,
        "y": 80,
        "wires": [
            [
                "208d98a.67a01e8"
            ]
        ]
    },
    {
        "id": "a0f1554e.3a37f8",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/feed",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "7e2fcb75.bf6834"
            ]
        ]
    },
    {
        "id": "7e2fcb75.bf6834",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "INSERT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "INSERT INTO feed VALUES ('{{payload.name}}', '{{{payload.url}}}')",
        "output": "str",
        "x": 400,
        "y": 140,
        "wires": [
            [
                "7c394caf.24af5c"
            ]
        ]
    },
    {
        "id": "7c394caf.24af5c",
        "type": "sqlite",
        "z": "3bbfc986.0e2a6e",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 550,
        "y": 140,
        "wires": [
            [
                "205ce7ef.7d5b68"
            ]
        ]
    },
    {
        "id": "cce5fd5b.b967a8",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/feed/delete/:rowid",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 180,
        "wires": [
            [
                "ec116343.32275"
            ]
        ]
    },
    {
        "id": "ec116343.32275",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "DELETE",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "DELETE FROM feed WHERE rowid = {{req.params.rowid}}",
        "output": "str",
        "x": 400,
        "y": 180,
        "wires": [
            [
                "7c394caf.24af5c"
            ]
        ]
    },
    {
        "id": "8429fcd0.1d5238",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "/monitor/feed",
        "info": "",
        "x": 110,
        "y": 40,
        "wires": []
    },
    {
        "id": "eb34ffb8.436778",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/keyword",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 280,
        "wires": [
            [
                "ce954653.ee7ad"
            ]
        ]
    },
    {
        "id": "e6d82daf.74fe08",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": " <!DOCTYPE html>\n<html>\n    <head>\n        <link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n    </head>\n<body>\n\n\n<div class=\"container\">\n    <h1>keyword</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Expression</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td>{{expression}}</td>\n                  <td><a href=\"/monitor/keyword/delete/{{rowid}}\" class=\"btn btn-outline-danger\">delete</a></td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table> \n        </div>\n        <div class=\"col-md-6\">\n            <form method=\"POST\" action=\"/monitor/keyword\">\n                <label for=\"expression\">Expression</label>\n                <input class=\"form-control\" id=\"expression\" name=\"expression\">\n                <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n            </form>\n        </div>\n    </div>\n</div>\n</body>\n</html> ",
        "output": "str",
        "x": 570,
        "y": 280,
        "wires": [
            [
                "cf8136d0.78b3"
            ]
        ]
    },
    {
        "id": "cf8136d0.78b3",
        "type": "http response",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 720,
        "y": 280,
        "wires": []
    },
    {
        "id": "ce954653.ee7ad",
        "type": "sqlite",
        "z": "3bbfc986.0e2a6e",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM keyword",
        "name": "db",
        "x": 440,
        "y": 280,
        "wires": [
            [
                "e6d82daf.74fe08"
            ]
        ]
    },
    {
        "id": "785f55c6.536294",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/keyword",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 340,
        "wires": [
            [
                "51e81a98.42fd2c"
            ]
        ]
    },
    {
        "id": "51e81a98.42fd2c",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "INSERT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "INSERT INTO keyword VALUES ('{{payload.expression}}')",
        "output": "str",
        "x": 410,
        "y": 340,
        "wires": [
            [
                "b989c70a.40f9d8"
            ]
        ]
    },
    {
        "id": "b989c70a.40f9d8",
        "type": "sqlite",
        "z": "3bbfc986.0e2a6e",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 560,
        "y": 340,
        "wires": [
            [
                "ce954653.ee7ad"
            ]
        ]
    },
    {
        "id": "ad4f8c77.088e1",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/keyword/delete/:rowid",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 180,
        "y": 380,
        "wires": [
            [
                "6e8cb252.be69ac"
            ]
        ]
    },
    {
        "id": "6e8cb252.be69ac",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "DELETE",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "DELETE FROM keyword WHERE rowid = {{req.params.rowid}}",
        "output": "str",
        "x": 410,
        "y": 380,
        "wires": [
            [
                "b989c70a.40f9d8"
            ]
        ]
    },
    {
        "id": "7d5641c5.dd2988",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "/monitor/keyword",
        "info": "",
        "x": 120,
        "y": 240,
        "wires": []
    },
    {
        "id": "bfbd1198.0b8b98",
        "type": "sqlitedb",
        "z": "",
        "db": "C:\\Users\\usuario\\Documents\\monitor\\monitor.db",
        "mode": "RWC"
    }
]