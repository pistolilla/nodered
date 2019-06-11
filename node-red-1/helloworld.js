[
    {
        "id": "a39b79c1.6d1eb8",
        "type": "http in",
        "z": "3bbfc986.0e2a6e",
        "name": "",
        "url": "/hello",
        "method": "get",
        "upload": false,
        "swaggerDoc": "",
        "x": 100,
        "y": 80,
        "wires": [
            [
                "208d98a.67a01e8"
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
        "format": "html",
        "syntax": "plain",
        "template": " <!DOCTYPE html>\n<html>\n    <head>\n        <link href=\"//stackpath.bootstrapcdn.com/bootswatch/4.3.1/slate/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-FBPbZPVh+7ks5JJ70RJmIaqyGnvMbeJ5JQfEbW0Ac6ErfvEg9yG56JQJuMNptWsH\" crossorigin=\"anonymous\">\n    </head>\n<body>\n\n<h1>Hello World!</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html> ",
        "output": "str",
        "x": 260,
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
        "x": 430,
        "y": 80,
        "wires": []
    }
]