import json

def lambda_handler(event, context):

    html = open("index.html").read()

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "text/html"
        },
        "body": html
    }