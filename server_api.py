from flask import Flask, request, Request, Response, jsonify
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
from os import environ


api = Flask(__name__)
CORS(api)

connection = MongoClient('mongodb://localhost', 27017)
database = connection['sampleApplication']

@api.route("/login", methods=["POST"])
@cross_origin()
def login():
    username = request.json["username"]
    password = request.json["password"]
    try:
        user = [item for item in database.users.find({'email': username, 'password': password},{"_id":0})][0]
        return jsonify({"data": user, "error":"false"}), 200
    except:
        return jsonify({"error": "true"}), 401


@api.route("/signup", methods=["POST"])
@cross_origin()
def signup():
    firstname = request.json["firstname"]
    lastname = request.json["lastname"]
    email = request.json["email"]
    password = request.json["password"]
    
    try:
        database.users.insert({"firstname": firstname, "lastname": lastname, "email": email, "password": password})
        return jsonify({"error": "false"}), 200
    except:
        return jsonify({"error": "true"}), 403
    




if __name__ == '__main__':
    api.debug = True
    Host = environ.get('IP','0.0.0.0')
    Port = int(environ.get('PORT',8086))
    api.run(host=Host, port=Port)
