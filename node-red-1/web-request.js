[
    {
        "id": "b1efee.a78db81",
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
                "403e5573.0be064"
            ]
        ]
    },
    {
        "id": "fac44983.dccea8",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "field": "template.body",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<div class=\"container\">\n    <h1>Feed</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Name</th>\n                  <th scope=\"col\">Url</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td>{{name}}</td>\n                  <td>{{url}}</td>\n                  <td><a href=\"/monitor/feed/delete/{{rowid}}\" class=\"btn btn-outline-danger\">delete</a></td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table> \n        </div>\n        <div class=\"col-md-6\">\n            <form method=\"POST\" action=\"/monitor/feed\">\n                <label for=\"name\">Name</label>\n                <input class=\"form-control\" id=\"name\" name=\"name\">\n                <label for=\"url\">Url</label>\n                <input class=\"form-control\" id=\"url\" name=\"url\">\n                <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n            </form>\n        </div>\n    </div>\n</div>",
        "output": "str",
        "x": 560,
        "y": 80,
        "wires": [
            [
                "809babd2.e712e8"
            ]
        ]
    },
    {
        "id": "403e5573.0be064",
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
                "fac44983.dccea8"
            ]
        ]
    },
    {
        "id": "aea83e36.31f56",
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
                "d87f534a.73a658"
            ]
        ]
    },
    {
        "id": "d87f534a.73a658",
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
                "21ac336b.700144"
            ]
        ]
    },
    {
        "id": "21ac336b.700144",
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
                "403e5573.0be064"
            ]
        ]
    },
    {
        "id": "e3451fb2.0d60f",
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
                "718ab64.abb4148"
            ]
        ]
    },
    {
        "id": "718ab64.abb4148",
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
                "21ac336b.700144"
            ]
        ]
    },
    {
        "id": "3a7457fa.e7e5c",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "/monitor/feed",
        "info": "",
        "x": 110,
        "y": 40,
        "wires": []
    },
    {
        "id": "5370a3c.e3e47dc",
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
                "d1424033.3c6ef8"
            ]
        ]
    },
    {
        "id": "c90a4991.bd9638",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "field": "template.body",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<div class=\"container\">\n    <h1>keyword</h1>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Expression</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td>{{expression}}</td>\n                  <td><a href=\"/monitor/keyword/delete/{{rowid}}\" class=\"btn btn-outline-danger\">delete</a></td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table> \n        </div>\n        <div class=\"col-md-6\">\n            <form method=\"POST\" action=\"/monitor/keyword\">\n                <label for=\"expression\">Expression</label>\n                <input class=\"form-control\" id=\"expression\" name=\"expression\">\n                <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n            </form>\n        </div>\n    </div>\n</div>",
        "output": "str",
        "x": 570,
        "y": 280,
        "wires": [
            [
                "809babd2.e712e8"
            ]
        ]
    },
    {
        "id": "d1424033.3c6ef8",
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
                "c90a4991.bd9638"
            ]
        ]
    },
    {
        "id": "3368532.21a7fac",
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
                "178b21aa.59eac6"
            ]
        ]
    },
    {
        "id": "178b21aa.59eac6",
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
                "d01ac8c4.5dc808"
            ]
        ]
    },
    {
        "id": "d01ac8c4.5dc808",
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
                "d1424033.3c6ef8"
            ]
        ]
    },
    {
        "id": "46f2c5c6.8b66dc",
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
                "88c0c9e0.a7fce"
            ]
        ]
    },
    {
        "id": "88c0c9e0.a7fce",
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
                "d01ac8c4.5dc808"
            ]
        ]
    },
    {
        "id": "2de61a9c.f4048e",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "/monitor/keyword",
        "info": "",
        "x": 120,
        "y": 240,
        "wires": []
    },
    {
        "id": "96b4ddb0.ac6be",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "front-end",
        "info": "",
        "x": 100,
        "y": 440,
        "wires": []
    },
    {
        "id": "39f7d500.863c5c",
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
                "1123002d.e2e5a"
            ]
        ]
    },
    {
        "id": "ca315672.f0ebe",
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
                "769e222f.84a44c"
            ]
        ]
    },
    {
        "id": "1123002d.e2e5a",
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
                "ca315672.f0ebe"
            ]
        ]
    },
    {
        "id": "ed3745f7.3f208",
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
                "1123002d.e2e5a"
            ]
        ]
    },
    {
        "id": "723b8770.383bd8",
        "type": "http response",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "statusCode": "",
        "headers": {},
        "x": 930,
        "y": 600,
        "wires": []
    },
    {
        "id": "a5598d76.5af7f8",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "/monitor",
        "field": "template.body",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<div class=\"container\">\n    <h1>Latest Stories</h1>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Headline</th>\n                  <th scope=\"col\">Summary</th>\n                  <th scope=\"col\">Sent</th>\n                </tr>\n              </thead>\n              <tbody>\n                {{#payload}}\n                <tr class=\"table-primary\">\n                  <td><a href=\"{{link}}\">{{title}}</a></td>\n                  <td>{{description}}</td>\n                  <td>{{#sent}}<i class=\"fa fa-check\" aria-hidden=\"true\"></i>{{/sent}}</td>\n                </tr>\n                {{/payload}}\n              </tbody>\n            </table> \n        </div>\n    </div>\n</div>",
        "output": "str",
        "x": 740,
        "y": 480,
        "wires": [
            [
                "809babd2.e712e8"
            ]
        ]
    },
    {
        "id": "809babd2.e712e8",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "navbar",
        "field": "template.navbar",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-4\">\n  <a class=\"navbar-brand\" href=\"/monitor\">RSS Monitor</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/monitor/showcase\">Showcase</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/monitor/feed\">Feeds</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/monitor/keyword\">Keywords</a>\n      </li>\n    </ul>\n    <form method=\"POST\" action=\"/monitor\" class=\"form-inline my-2 my-lg-0\">\n      <input name=\"search\" value=\"{{req.body.search}}\" class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>",
        "output": "str",
        "x": 920,
        "y": 480,
        "wires": [
            [
                "d6b932df.bf129"
            ]
        ]
    },
    {
        "id": "d6b932df.bf129",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "head",
        "field": "template.head",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n<script src=\"//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js\" integrity=\"sha384-xrRywqdh3PHs8keKZN+8zzc5TX0GRTLCcmivcbNJWm2rs5C8PRhcEn3czEjhAO9o\" crossorigin=\"anonymous\"></script>\n<link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n<link href=\"//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">",
        "output": "str",
        "x": 930,
        "y": 520,
        "wires": [
            [
                "3f64d481.178edc"
            ]
        ]
    },
    {
        "id": "3f64d481.178edc",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "html",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<!DOCTYPE html>\n<html>\n    <head>\n        {{{template.head}}}\n    </head>\n    <body>\n        {{{template.navbar}}}\n        {{{template.body}}}\n    </body>\n</html> ",
        "output": "str",
        "x": 930,
        "y": 560,
        "wires": [
            [
                "723b8770.383bd8"
            ]
        ]
    },
    {
        "id": "ecd6ba1c.72aca",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/showcase",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 560,
        "wires": [
            [
                "1123002d.e2e5a"
            ]
        ]
    },
    {
        "id": "769e222f.84a44c",
        "type": "switch",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "property": "req.url",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "/monitor",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "/monitor/showcase",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "/monitor/api/match",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 3,
        "x": 550,
        "y": 500,
        "wires": [
            [
                "a5598d76.5af7f8"
            ],
            [
                "8d560db1.b3c"
            ],
            [
                "723b8770.383bd8"
            ]
        ]
    },
    {
        "id": "8d560db1.b3c",
        "type": "template",
        "z": "3bbfc986.0e2a6e",
        "name": "/showcase",
        "field": "template.body",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "<div class=\"row\">\n    {{#payload}}\n    <div class=\"col-sm-6 col-md-4 col-lg-2\">\n        <div class=\"card text-white {{^sent}}bg-secondary{{/sent}} m-2\" style=\"max-width: 20rem;\">\n          <div class=\"card-header\"><a href=\"{{link}}\">{{title}}</a></div>\n          <div class=\"card-body\">\n            <p class=\"card-text\">{{description}}</p>\n          </div>\n        </div>\n    </div>\n    {{/payload}}\n</div>",
        "output": "str",
        "x": 750,
        "y": 520,
        "wires": [
            [
                "d6b932df.bf129"
            ]
        ]
    },
    {
        "id": "1783226.748f25e",
        "type": "comment",
        "z": "3bbfc986.0e2a6e",
        "name": "front-end",
        "info": "",
        "x": 100,
        "y": 600,
        "wires": []
    },
    {
        "id": "58cf3ded.0a3034",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/api/match",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 140,
        "y": 640,
        "wires": [
            [
                "1123002d.e2e5a"
            ]
        ]
    },
    {
        "id": "4e010af3.c3acdc",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/monitor/api/match",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 150,
        "y": 680,
        "wires": [
            [
                "1123002d.e2e5a"
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