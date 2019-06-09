[
    {
        "id": "66f707df.b6335",
        "type": "switch",
        "z": "54fc9908.b81b1",
        "name": "",
        "property": "article.description",
        "propertyType": "msg",
        "rules": [
            {
                "t": "regex",
                "v": "warriors",
                "vt": "str",
                "case": true
            },
            {
                "t": "regex",
                "v": "golden state",
                "vt": "str",
                "case": true
            },
            {
                "t": "regex",
                "v": "curry",
                "vt": "str",
                "case": true
            },
            {
                "t": "regex",
                "v": "kerr",
                "vt": "str",
                "case": true
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 5,
        "x": 230,
        "y": 120,
        "wires": [
            [
                "558f65fd.3a2f8c"
            ],
            [
                "558f65fd.3a2f8c"
            ],
            [
                "558f65fd.3a2f8c"
            ],
            [
                "558f65fd.3a2f8c"
            ],
            []
        ]
    },
    {
        "id": "9c4151f2.e90dc8",
        "type": "e-mail",
        "z": "54fc9908.b81b1",
        "server": "mail.polushon.com",
        "port": "26",
        "secure": false,
        "tls": false,
        "name": "node-red@polushon.com",
        "dname": "e-mail",
        "x": 420,
        "y": 220,
        "wires": []
    },
    {
        "id": "558f65fd.3a2f8c",
        "type": "change",
        "z": "54fc9908.b81b1",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "article.title",
                "tot": "msg"
            },
            {
                "t": "set",
                "p": "from",
                "pt": "msg",
                "to": "\"RSS Alert\" <rss-alert@noreply.com>",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 100,
        "wires": [
            [
                "e6dcea65.f01ff8"
            ]
        ]
    },
    {
        "id": "e6dcea65.f01ff8",
        "type": "template",
        "z": "54fc9908.b81b1",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{article.description}}\n\nRead more: {{{article.link}}}",
        "output": "str",
        "x": 400,
        "y": 180,
        "wires": [
            [
                "9c4151f2.e90dc8"
            ]
        ]
    },
    {
        "id": "b099d54.7b791a8",
        "type": "feedparse",
        "z": "54fc9908.b81b1",
        "name": "espn",
        "url": "https://www.espn.com/espn/rss/news",
        "interval": "1",
        "x": 90,
        "y": 80,
        "wires": [
            [
                "66f707df.b6335",
                "a86f4bec.b15fa"
            ]
        ]
    },
    {
        "id": "1810a1b1.d8be9e",
        "type": "feedparse",
        "z": "54fc9908.b81b1",
        "name": "Fox",
        "url": "https://api.foxsports.com/v1/rss",
        "interval": "1",
        "x": 90,
        "y": 120,
        "wires": [
            [
                "66f707df.b6335"
            ]
        ]
    },
    {
        "id": "a86f4bec.b15fa",
        "type": "debug",
        "z": "54fc9908.b81b1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 230,
        "y": 40,
        "wires": []
    }
]