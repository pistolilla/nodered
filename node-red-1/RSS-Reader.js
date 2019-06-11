[
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
        "x": 450,
        "y": 580,
        "wires": []
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
        "template": "{{#payload}}\n{{description}}\n\nRead more: {{{link}}}\n{{/payload}}",
        "output": "str",
        "x": 440,
        "y": 540,
        "wires": [
            [
                "9c4151f2.e90dc8",
                "851e444a.ce1078"
            ]
        ]
    },
    {
        "id": "8c0076d8.229a7",
        "type": "comment",
        "z": "54fc9908.b81b1",
        "name": "RSS Reader",
        "info": "",
        "x": 110,
        "y": 40,
        "wires": []
    },
    {
        "id": "f5c10d34.4cc968",
        "type": "inject",
        "z": "54fc9908.b81b1",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 120,
        "y": 80,
        "wires": [
            [
                "c9b9558a.5fcf6"
            ]
        ]
    },
    {
        "id": "799cc51a.fb3b4c",
        "type": "comment",
        "z": "54fc9908.b81b1",
        "name": "reading keywords",
        "info": "",
        "x": 170,
        "y": 120,
        "wires": []
    },
    {
        "id": "c9b9558a.5fcf6",
        "type": "sqlite",
        "z": "54fc9908.b81b1",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM keyword",
        "name": "db",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "8188c027.0d1108"
            ]
        ]
    },
    {
        "id": "8188c027.0d1108",
        "type": "change",
        "z": "54fc9908.b81b1",
        "name": "keyword",
        "rules": [
            {
                "t": "set",
                "p": "keyword",
                "pt": "msg",
                "to": "$join(payload.expression, \"|\")",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 260,
        "y": 160,
        "wires": [
            [
                "48e11187.27931"
            ]
        ]
    },
    {
        "id": "5aad0055.188128",
        "type": "comment",
        "z": "54fc9908.b81b1",
        "name": "reading feed urls",
        "info": "",
        "x": 440,
        "y": 120,
        "wires": []
    },
    {
        "id": "48e11187.27931",
        "type": "sqlite",
        "z": "54fc9908.b81b1",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM feed",
        "name": "db",
        "x": 410,
        "y": 160,
        "wires": [
            [
                "7febe416.febbe4"
            ]
        ]
    },
    {
        "id": "7febe416.febbe4",
        "type": "split",
        "z": "54fc9908.b81b1",
        "name": "",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 530,
        "y": 160,
        "wires": [
            [
                "96557c56.e2df58"
            ]
        ]
    },
    {
        "id": "4ca9472c.2e644",
        "type": "http request",
        "z": "54fc9908.b81b1",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "authType": "basic",
        "x": 290,
        "y": 220,
        "wires": [
            [
                "9501489f.e5e4e8"
            ]
        ]
    },
    {
        "id": "96557c56.e2df58",
        "type": "change",
        "z": "54fc9908.b81b1",
        "name": "read url",
        "rules": [
            {
                "t": "move",
                "p": "payload.url",
                "pt": "msg",
                "to": "url",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 140,
        "y": 220,
        "wires": [
            [
                "4ca9472c.2e644"
            ]
        ]
    },
    {
        "id": "9501489f.e5e4e8",
        "type": "xml",
        "z": "54fc9908.b81b1",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 430,
        "y": 220,
        "wires": [
            [
                "b16fee5b.14a9b"
            ]
        ]
    },
    {
        "id": "b16fee5b.14a9b",
        "type": "change",
        "z": "54fc9908.b81b1",
        "name": "read item",
        "rules": [
            {
                "t": "move",
                "p": "payload.rss.channel[0].item",
                "pt": "msg",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 140,
        "y": 260,
        "wires": [
            [
                "f11b802a.edaa88"
            ]
        ]
    },
    {
        "id": "f11b802a.edaa88",
        "type": "split",
        "z": "54fc9908.b81b1",
        "name": "split articles",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 150,
        "y": 320,
        "wires": [
            [
                "8655718a.bd0d2"
            ]
        ]
    },
    {
        "id": "8655718a.bd0d2",
        "type": "switch",
        "z": "54fc9908.b81b1",
        "name": "match?",
        "property": "payload.description[0]",
        "propertyType": "msg",
        "rules": [
            {
                "t": "regex",
                "v": "keyword",
                "vt": "msg",
                "case": true
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 320,
        "y": 320,
        "wires": [
            [
                "7530f7d7.e15a2"
            ],
            []
        ]
    },
    {
        "id": "7530f7d7.e15a2",
        "type": "template",
        "z": "54fc9908.b81b1",
        "name": "INSERT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "INSERT OR IGNORE INTO match VALUES (\n    '{{{payload.link.0}}}',\n    '{{payload.title.0}}',\n    '{{payload.description.0}}',\n    0)",
        "output": "str",
        "x": 480,
        "y": 320,
        "wires": [
            [
                "ae8fd466.79cce"
            ]
        ]
    },
    {
        "id": "ae8fd466.79cce",
        "type": "sqlite",
        "z": "54fc9908.b81b1",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 610,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "6fc6e19a.c5888",
        "type": "comment",
        "z": "54fc9908.b81b1",
        "name": "Notifications",
        "info": "",
        "x": 110,
        "y": 380,
        "wires": []
    },
    {
        "id": "3194f148.03ca1e",
        "type": "inject",
        "z": "54fc9908.b81b1",
        "name": "1 day",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 110,
        "y": 420,
        "wires": [
            [
                "fb9d629f.562b48"
            ]
        ]
    },
    {
        "id": "fb9d629f.562b48",
        "type": "sqlite",
        "z": "54fc9908.b81b1",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM match\nWHERE sent = 0",
        "name": "db",
        "x": 130,
        "y": 500,
        "wires": [
            [
                "e4fa7847.5116f",
                "ab3597f4.0f4f8"
            ]
        ]
    },
    {
        "id": "fb57bed1.7ce1c",
        "type": "comment",
        "z": "54fc9908.b81b1",
        "name": "reading matches",
        "info": "",
        "x": 160,
        "y": 460,
        "wires": []
    },
    {
        "id": "e4fa7847.5116f",
        "type": "split",
        "z": "54fc9908.b81b1",
        "name": "",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 250,
        "y": 500,
        "wires": [
            [
                "23f60d38.1d9d22"
            ]
        ]
    },
    {
        "id": "23f60d38.1d9d22",
        "type": "template",
        "z": "54fc9908.b81b1",
        "name": "UPDATE",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "UPDATE match SET sent = 1 WHERE rowid = {{payload.rowid}}",
        "output": "str",
        "x": 480,
        "y": 460,
        "wires": [
            [
                "ae8fd466.79cce"
            ]
        ]
    },
    {
        "id": "d923ae63.8d7a",
        "type": "change",
        "z": "54fc9908.b81b1",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "Daily report",
                "tot": "str"
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
        "x": 280,
        "y": 600,
        "wires": [
            [
                "e6dcea65.f01ff8"
            ]
        ]
    },
    {
        "id": "851e444a.ce1078",
        "type": "debug",
        "z": "54fc9908.b81b1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 580,
        "y": 520,
        "wires": []
    },
    {
        "id": "ab3597f4.0f4f8",
        "type": "switch",
        "z": "54fc9908.b81b1",
        "name": "empty?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "empty"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 210,
        "y": 560,
        "wires": [
            [],
            [
                "d923ae63.8d7a"
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