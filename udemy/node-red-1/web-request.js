[
    {
        "id": "3bbfc986.0e2a6e",
        "type": "tab",
        "label": "web-request",
        "disabled": false,
        "info": ""
    },
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
        "id": "51d81e05.beeec8",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "front-end",
        "info": "",
        "x": 100,
        "y": 440,
        "wires": []
    },
    {
        "id": "c4c32ec.05e1c5",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "/showcase",
        "field": "template.body",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<div class=\"row\">\n{{#payload}}\n<div class=\"col-sm-6 col-md-4 col-lg-2\">\n    <div class=\"card text-white {{^sent}}bg-secondary{{/sent}} m-2\" style=\"max-width: 20rem;\">\n      <div class=\"card-header\"><a href=\"{{link}}\">{{title}}</a></div>\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{description}}</p>\n      </div>\n    </div>\n</div>\n{{/payload}}\n</div>",
        "output": "str",
        "x": 710,
        "y": 480,
        "wires": [
            [
                "38f55a27.85e3c6"
            ]
        ]
    },
    {
        "id": "8240c423.e9be9",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 520,
        "wires": [
            [
                "24d7c55c.bcf0ba",
                "d43d2671.f613b8"
            ]
        ]
    },
    {
        "id": "c01e3093.7eb278",
        "type": "sqlite",
        "z": "3bbfc986.0e2a6e",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 430,
        "y": 480,
        "wires": [
            [
                "1105bd0.139a5c3"
            ]
        ]
    },
    {
        "id": "24d7c55c.bcf0ba",
        "type": "debug",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 350,
        "y": 560,
        "wires": []
    },
    {
        "id": "d43d2671.f613b8",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "SELECT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "SELECT rowid, *\nFROM match\nWHERE title LIKE '%{{payload.search}}%' OR description LIKE '%{{payload.search}}%'\nORDER BY rowid DESC",
        "output": "str",
        "x": 280,
        "y": 480,
        "wires": [
            [
                "c01e3093.7eb278"
            ]
        ]
    },
    {
        "id": "bf14cd6c.5d73e",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 110,
        "y": 480,
        "wires": [
            [
                "d43d2671.f613b8"
            ]
        ]
    },
    {
        "id": "6ef97f3d.638c28",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/showcase",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 120,
        "y": 560,
        "wires": [
            [
                "d43d2671.f613b8"
            ]
        ]
    },
    {
        "id": "1105bd0.139a5c3",
        "type": "switch",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "property": "req.url",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "monitor",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "show",
                "vt": "str"
            },
            {
                "t": "cont",
                "v": "api",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 3,
        "x": 550,
        "y": 480,
        "wires": [
            [
                "c1a8ab24.f68ee8"
            ],
            [
                "c4c32ec.05e1c5"
            ],
            [
                "b1732e14.803e3"
            ]
        ]
    },
    {
        "id": "b1732e14.803e3",
        "type": "http response",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 890,
        "y": 560,
        "wires": []
    },
    {
        "id": "c1a8ab24.f68ee8",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "/monitor",
        "field": "template.body",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<div class=\"container\">\n    <h1>Latest Stories</h1>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Headline</th>\n                  <th scope=\"col\">Summary</th>\n                  <th scope=\"col\">Sent</th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td><a href=\"{{link}}\">{{title}}</a></td>\n                  <td>{{description}}</td>\n                  <td>{{#sent}}<i class=\"fas fa-check-circle\"></i>{{/sent}}</td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table> \n        </div>\n    </div>\n</div>",
        "output": "str",
        "x": 700,
        "y": 440,
        "wires": [
            [
                "e8cf19da.911828"
            ]
        ]
    },
    {
        "id": "38f55a27.85e3c6",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "head",
        "field": "template.head",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js\"></script>\n<script src=\"//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js\"></script>\n<link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n<link rel=\"stylesheet\" href=\"//use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\" crossorigin=\"anonymous\">",
        "output": "str",
        "x": 890,
        "y": 480,
        "wires": [
            [
                "e76a4d2b.586ee"
            ]
        ]
    },
    {
        "id": "e8cf19da.911828",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "navbar",
        "field": "template.navbar",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-4\">\n  <a class=\"navbar-brand\" href=\"/monitor\">RSS Monitor</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/monitor/feed\">Feed</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/monitor/keyword\">Keyword</a>\n      </li>\n    </ul>\n    <form method=\"POST\" action=\"/monitor\" class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" name=\"search\" value=\"{{req.body.search}}\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>",
        "output": "str",
        "x": 880,
        "y": 440,
        "wires": [
            [
                "38f55a27.85e3c6"
            ]
        ]
    },
    {
        "id": "e76a4d2b.586ee",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "html",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<!DOCTYPE html>\n<html>\n    <head>\n        {{{template.head}}}    \n    </head>\n    <body>\n        {{{template.navbar}}}\n        {{{template.body}}}\n    </body>\n</html> ",
        "output": "str",
        "x": 890,
        "y": 520,
        "wires": [
            [
                "b1732e14.803e3"
            ]
        ]
    },
    {
        "id": "405524d4.1807c4",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/api",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 100,
        "y": 640,
        "wires": [
            [
                "d43d2671.f613b8"
            ]
        ]
    },
    {
        "id": "f993e4ce.be841",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "/api",
        "info": "",
        "x": 90,
        "y": 600,
        "wires": []
    },
    {
        "id": "5939fa74.1d1a34",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/api",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 100,
        "y": 680,
        "wires": [
            [
                "d43d2671.f613b8"
            ]
        ]
    },
    {
        "id": "bfbd1198.0b8b98",
        "type": "sqlitedb",
        "z": "",
        "db": "C:\\Users\\usuario\\Documents\\monitor\\monitor.db",
        "mode": "RWC"
    }
]