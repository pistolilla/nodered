[
    {
        "id": "e766138d.eae3c",
        "type": "sqlite",
        "z": "bd626a1c.9c942",
        "mydb": "bfbd1198.0b8b98",
        "sqlquery": "msg.topic",
        "sql": "",
        "name": "db",
        "x": 430,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "28f35694.cfcd32",
        "type": "inject",
        "z": "bd626a1c.9c942",
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
                "e766138d.eae3c"
            ]
        ]
    },
    {
        "id": "7967dccd.4675fc",
        "type": "inject",
        "z": "bd626a1c.9c942",
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
                "e766138d.eae3c"
            ]
        ]
    },
    {
        "id": "fafbdc40.4f70f",
        "type": "inject",
        "z": "bd626a1c.9c942",
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
                "e766138d.eae3c"
            ]
        ]
    },
    {
        "id": "b52c1336.94e028",
        "type": "inject",
        "z": "bd626a1c.9c942",
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
                "e766138d.eae3c"
            ]
        ]
    },
    {
        "id": "397695f2.9616ba",
        "type": "inject",
        "z": "bd626a1c.9c942",
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
                "e766138d.eae3c"
            ]
        ]
    },
    {
        "id": "b53d607a.cd803",
        "type": "inject",
        "z": "bd626a1c.9c942",
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
                "e766138d.eae3c"
            ]
        ]
    },
    {
        "id": "678ba3df.6026c4",
        "type": "comment",
        "z": "bd626a1c.9c942",
        "name": "delete tables",
        "info": "",
        "x": 110,
        "y": 200,
        "wires": []
    },
    {
        "id": "40b632dd.632cdc",
        "type": "comment",
        "z": "bd626a1c.9c942",
        "name": "create tables",
        "info": "",
        "x": 110,
        "y": 40,
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