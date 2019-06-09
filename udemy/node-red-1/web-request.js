[
    {
        "id": "a47393f.413997",
        "type": "http in",
        "z": "63a16133.1282d8",
        "name": "",
        "url": "/monitor/feed",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 100,
        "wires": [
            [
                "fa43f6e5.b0d5e"
            ]
        ]
    },
    {
        "id": "efa8b416.ee87d",
        "type": "template",
        "z": "63a16133.1282d8",
        "name": "html",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": " <!DOCTYPE html>\n<html>\n    <head>\n        <link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n    </head>\n<body>\n<div class=\"container\">\n    <h1>Feed</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Name</th>\n                  <th scope=\"col\">Url</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td>{{name}}</td>\n                  <td>{{url}}</td>\n                  <td><a href=\"/monitor/feed/delete/{{rowid}}\" class=\"btn btn-outline-danger\">delete</button></td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-6\">\n            <form method=\"POST\" action=\"/monitor/feed\">\n                <div class=\"form-group\">\n                  <label for=\"name\">Name</label>\n                  <input class=\"form-control\" id=\"name\" name=\"name\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"url\">Url</label>\n                  <input class=\"form-control\" id=\"url\" name=\"url\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n            </form>\n        </div>\n    </div>\n\n</div>\n</body>\n</html> ",
        "output": "str",
        "x": 570,
        "y": 100,
        "wires": [
            [
                "8cd175cc.8aa14"
            ]
        ]
    },
    {
        "id": "8cd175cc.8aa14",
        "type": "http response",
        "z": "63a16133.1282d8",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 690,
        "y": 100,
        "wires": []
    },
    {
        "id": "fa43f6e5.b0d5e",
        "type": "sqlite",
        "z": "63a16133.1282d8",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM feed",
        "name": "db",
        "x": 450,
        "y": 100,
        "wires": [
            [
                "efa8b416.ee87d"
            ]
        ]
    },
    {
        "id": "50696309.b8151c",
        "type": "sqlite",
        "z": "63a16133.1282d8",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "msg.topic",
        "sql": "SELECT * FROM keyword",
        "name": "db",
        "x": 530,
        "y": 160,
        "wires": [
            [
                "fa43f6e5.b0d5e"
            ]
        ]
    },
    {
        "id": "b91ef018.a94048",
        "type": "http in",
        "z": "63a16133.1282d8",
        "name": "",
        "url": "/monitor/feed",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "8d3cc4f8.3d415"
            ]
        ]
    },
    {
        "id": "8d3cc4f8.3d415",
        "type": "template",
        "z": "63a16133.1282d8",
        "name": "INSERT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "INSERT INTO feed VALUES ('{{payload.name}}', '{{{payload.url}}}')",
        "output": "str",
        "x": 400,
        "y": 160,
        "wires": [
            [
                "50696309.b8151c"
            ]
        ]
    },
    {
        "id": "ef90f436.b5e288",
        "type": "http in",
        "z": "63a16133.1282d8",
        "name": "",
        "url": "/monitor/feed/delete/:rowid",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 170,
        "y": 200,
        "wires": [
            [
                "246749ce.73fa0e"
            ]
        ]
    },
    {
        "id": "246749ce.73fa0e",
        "type": "template",
        "z": "63a16133.1282d8",
        "name": "DELETE",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "DELETE FROM feed WHERE rowid = {{req.params.rowid}}",
        "output": "str",
        "x": 400,
        "y": 200,
        "wires": [
            [
                "50696309.b8151c"
            ]
        ]
    },
    {
        "id": "ebced92b.1fc5",
        "type": "comment",
        "z": "63a16133.1282d8",
        "name": "/monitor/feed",
        "info": "",
        "x": 110,
        "y": 60,
        "wires": []
    },
    {
        "id": "9a8b963d.c4084",
        "type": "http in",
        "z": "63a16133.1282d8",
        "name": "",
        "url": "/monitor/keyword",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 300,
        "wires": [
            [
                "9641575a.fc629"
            ]
        ]
    },
    {
        "id": "a7802461.9ea8d8",
        "type": "template",
        "z": "63a16133.1282d8",
        "name": "html",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": " <!DOCTYPE html>\n<html>\n    <head>\n        <link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n    </head>\n<body>\n<div class=\"container\">\n    <h1>keyword</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Expression</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td>{{expression}}</td>\n                  <td><a href=\"/monitor/keyword/delete/{{rowid}}\" class=\"btn btn-outline-danger\">delete</button></td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table>\n        </div>\n        <div class=\"col-md-6\">\n            <form method=\"POST\" action=\"/monitor/keyword\">\n                <div class=\"form-group\">\n                  <label for=\"expression\">Expression</label>\n                  <input class=\"form-control\" id=\"expression\" name=\"expression\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n            </form>\n        </div>\n    </div>\n\n</div>\n</body>\n</html> ",
        "output": "str",
        "x": 570,
        "y": 300,
        "wires": [
            [
                "2dadeed7.982562"
            ]
        ]
    },
    {
        "id": "2dadeed7.982562",
        "type": "http response",
        "z": "63a16133.1282d8",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 690,
        "y": 300,
        "wires": []
    },
    {
        "id": "9641575a.fc629",
        "type": "sqlite",
        "z": "63a16133.1282d8",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM keyword",
        "name": "db",
        "x": 450,
        "y": 300,
        "wires": [
            [
                "a7802461.9ea8d8"
            ]
        ]
    },
    {
        "id": "53607690.8bbd5",
        "type": "sqlite",
        "z": "63a16133.1282d8",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "msg.topic",
        "sql": "SELECT * FROM keyword",
        "name": "db",
        "x": 540,
        "y": 360,
        "wires": [
            [
                "9641575a.fc629"
            ]
        ]
    },
    {
        "id": "689317db.d2904",
        "type": "http in",
        "z": "63a16133.1282d8",
        "name": "",
        "url": "/monitor/keyword",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 360,
        "wires": [
            [
                "5bece3d9.3529e4"
            ]
        ]
    },
    {
        "id": "5bece3d9.3529e4",
        "type": "template",
        "z": "63a16133.1282d8",
        "name": "INSERT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "INSERT INTO keyword VALUES ('{{payload.expression}}')",
        "output": "str",
        "x": 410,
        "y": 360,
        "wires": [
            [
                "53607690.8bbd5"
            ]
        ]
    },
    {
        "id": "e022409a.c82f",
        "type": "http in",
        "z": "63a16133.1282d8",
        "name": "",
        "url": "/monitor/keyword/delete/:rowid",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 180,
        "y": 400,
        "wires": [
            [
                "988bc564.eefd1"
            ]
        ]
    },
    {
        "id": "988bc564.eefd1",
        "type": "template",
        "z": "63a16133.1282d8",
        "name": "DELETE",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "DELETE FROM keyword WHERE rowid = {{req.params.rowid}}",
        "output": "str",
        "x": 410,
        "y": 400,
        "wires": [
            [
                "53607690.8bbd5"
            ]
        ]
    },
    {
        "id": "28a99d25.0ee30a",
        "type": "comment",
        "z": "63a16133.1282d8",
        "name": "/monitor/keyword",
        "info": "",
        "x": 120,
        "y": 260,
        "wires": []
    },
    {
        "id": "f31c6682.b0e7d",
        "type": "sqlitedb",
        "z": "",
        "db": "C:\\Leo\\Academy\\node-red-1\\resources\\mediamonitoring.db",
        "mode": "RWC"
    }
]