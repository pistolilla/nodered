[
    {
        "id": "8bff5faf.406a3",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "CREATE feed",
        "topic": "CREATE TABLE feed (name, url)",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 130,
        "y": 80,
        "wires": [
            [
                "4675312f.4b2808"
            ]
        ]
    },
    {
        "id": "4675312f.4b2808",
        "type": "sqlite",
        "z": "205373e9.a57714",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 350,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "740da85c.2fce3",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "CREATE keyword",
        "topic": "CREATE TABLE keyword (expression)",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 150,
        "y": 120,
        "wires": [
            [
                "4675312f.4b2808"
            ]
        ]
    },
    {
        "id": "c3872af9.3d52d8",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "creation",
        "info": "",
        "x": 100,
        "y": 40,
        "wires": []
    },
    {
        "id": "20b9014e.bd41f6",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "CREATE match",
        "topic": "CREATE TABLE match (link, title, description, sent, UNIQUE(link))",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 160,
        "wires": [
            [
                "4675312f.4b2808"
            ]
        ]
    },
    {
        "id": "dd65c690.affb3",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "DROP feed",
        "topic": "DROP TABLE feed",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 130,
        "y": 240,
        "wires": [
            [
                "4675312f.4b2808"
            ]
        ]
    },
    {
        "id": "e4080d4f.7382b",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "DROP keyword",
        "topic": "DROP TABLE keyword",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 280,
        "wires": [
            [
                "4675312f.4b2808"
            ]
        ]
    },
    {
        "id": "bf0a4555.c2a3a8",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "deletion",
        "info": "",
        "x": 90,
        "y": 200,
        "wires": []
    },
    {
        "id": "321e3320.df2024",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "DROP match",
        "topic": "DROP TABLE match",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 130,
        "y": 320,
        "wires": [
            [
                "4675312f.4b2808"
            ]
        ]
    },
    {
        "id": "b8d1b4b2.e8aba",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "1 min",
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 110,
        "y": 420,
        "wires": [
            [
                "6413ca5c.16dc7c"
            ]
        ]
    },
    {
        "id": "6413ca5c.16dc7c",
        "type": "sqlite",
        "z": "205373e9.a57714",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "fixed",
        "sql": "SELECT * FROM keyword",
        "name": "db",
        "x": 130,
        "y": 500,
        "wires": [
            [
                "e2ca041e.43ada8"
            ]
        ]
    },
    {
        "id": "e2ca041e.43ada8",
        "type": "change",
        "z": "205373e9.a57714",
        "name": "keyword",
        "rules": [
            {
                "t": "set",
                "p": "keyword",
                "pt": "msg",
                "to": "$join(payload.expression, \"|\")\t",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 260,
        "y": 500,
        "wires": [
            [
                "9f90494b.58304"
            ]
        ]
    },
    {
        "id": "9f90494b.58304",
        "type": "sqlite",
        "z": "205373e9.a57714",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "fixed",
        "sql": "SELECT * FROM feed",
        "name": "db",
        "x": 410,
        "y": 500,
        "wires": [
            [
                "5850702d.2f9658"
            ]
        ]
    },
    {
        "id": "5850702d.2f9658",
        "type": "split",
        "z": "205373e9.a57714",
        "name": "split urls",
        "splt": "",
        "spltType": "str",
        "arraySplt": "1",
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 540,
        "y": 500,
        "wires": [
            [
                "65f2710f.6e23c"
            ]
        ]
    },
    {
        "id": "65f2710f.6e23c",
        "type": "change",
        "z": "205373e9.a57714",
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
        "y": 560,
        "wires": [
            [
                "1605cbd8.a7efac"
            ]
        ]
    },
    {
        "id": "341e71f.22f7e8e",
        "type": "template",
        "z": "205373e9.a57714",
        "name": "INSERT",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "INSERT OR IGNORE INTO match VALUES (\n    '{{{payload.link.0}}}',\n    '{{payload.title.0}}',\n    '{{payload.description.0}}',\n    0)",
        "output": "str",
        "x": 440,
        "y": 660,
        "wires": [
            [
                "f3d568b4.e6d7f8"
            ]
        ]
    },
    {
        "id": "725b8ae8.7a5554",
        "type": "switch",
        "z": "205373e9.a57714",
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
        "x": 300,
        "y": 660,
        "wires": [
            [
                "341e71f.22f7e8e"
            ],
            []
        ]
    },
    {
        "id": "1605cbd8.a7efac",
        "type": "http request",
        "z": "205373e9.a57714",
        "name": "",
        "method": "GET",
        "ret": "txt",
        "paytoqs": false,
        "url": "",
        "tls": "",
        "proxy": "",
        "authType": "basic",
        "x": 290,
        "y": 560,
        "wires": [
            [
                "f1818046.895b8"
            ]
        ]
    },
    {
        "id": "f1818046.895b8",
        "type": "xml",
        "z": "205373e9.a57714",
        "name": "",
        "property": "payload",
        "attr": "",
        "chr": "",
        "x": 430,
        "y": 560,
        "wires": [
            [
                "414fbd5b.52fa1c"
            ]
        ]
    },
    {
        "id": "1fe15abc.c58de5",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "reading keywords",
        "info": "",
        "x": 170,
        "y": 460,
        "wires": []
    },
    {
        "id": "204d317a.ec9ef6",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "reading feed urls",
        "info": "",
        "x": 440,
        "y": 460,
        "wires": []
    },
    {
        "id": "ec3bd951.9cc25",
        "type": "split",
        "z": "205373e9.a57714",
        "name": "split articles",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 150,
        "y": 660,
        "wires": [
            [
                "725b8ae8.7a5554"
            ]
        ]
    },
    {
        "id": "414fbd5b.52fa1c",
        "type": "change",
        "z": "205373e9.a57714",
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
        "y": 600,
        "wires": [
            [
                "ec3bd951.9cc25"
            ]
        ]
    },
    {
        "id": "f3d568b4.e6d7f8",
        "type": "sqlite",
        "z": "205373e9.a57714",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 570,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "68a250d2.ec80a8",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "Media monitoring",
        "info": "",
        "x": 120,
        "y": 380,
        "wires": []
    },
    {
        "id": "de1f5290.020708",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "Notifications",
        "info": "",
        "x": 110,
        "y": 720,
        "wires": []
    },
    {
        "id": "f5cd3fe8.5300c",
        "type": "inject",
        "z": "205373e9.a57714",
        "name": "1 day",
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "repeat": "",
        "crontab": "00 13 * * 1,2,3,4,5,6",
        "once": false,
        "onceDelay": 0.1,
        "x": 120,
        "y": 760,
        "wires": [
            [
                "2d21ad60.0be2da"
            ]
        ]
    },
    {
        "id": "9e64ba4a.1d6d4",
        "type": "comment",
        "z": "205373e9.a57714",
        "name": "reading keywords",
        "info": "",
        "x": 170,
        "y": 800,
        "wires": []
    },
    {
        "id": "2d21ad60.0be2da",
        "type": "sqlite",
        "z": "205373e9.a57714",
        "mydb": "f31c6682.b0e7d",
        "sqlquery": "fixed",
        "sql": "SELECT rowid, * FROM match\nWHERE sent = 0",
        "name": "db",
        "x": 130,
        "y": 840,
        "wires": [
            [
                "247264b1.e53264"
            ]
        ]
    },
    {
        "id": "ee85d168.11231",
        "type": "debug",
        "z": "205373e9.a57714",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 230,
        "y": 900,
        "wires": []
    },
    {
        "id": "247264b1.e53264",
        "type": "split",
        "z": "205373e9.a57714",
        "name": "split payload",
        "splt": "\\n",
        "spltType": "str",
        "arraySplt": 1,
        "arraySpltType": "len",
        "stream": false,
        "addname": "",
        "x": 270,
        "y": 840,
        "wires": [
            [
                "ee85d168.11231",
                "67ed4b97.a312f4",
                "c900708d.d83648"
            ]
        ]
    },
    {
        "id": "67ed4b97.a312f4",
        "type": "template",
        "z": "205373e9.a57714",
        "name": "UPDATE",
        "field": "topic",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "UPDATE match SET sent = 1 WHERE rowid = {{payload.rowid}}",
        "output": "str",
        "x": 440,
        "y": 800,
        "wires": [
            [
                "f3d568b4.e6d7f8"
            ]
        ]
    },
    {
        "id": "c900708d.d83648",
        "type": "template",
        "z": "205373e9.a57714",
        "name": "",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{{payload.description}}\n\nRead more: {{{payload.link}}}",
        "output": "str",
        "x": 440,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "f31c6682.b0e7d",
        "type": "sqlitedb",
        "z": "",
        "db": "C:\\Leo\\Academy\\node-red-1\\resources\\mediamonitoring.db",
        "mode": "RWC"
    }
]