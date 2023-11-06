from flask import Flask,request
from flask_cors import CORS, cross_origin
import matlab.engine
import json
from utils import utils
from dotenv import load_dotenv
import os
from flask import request,redirect
from oauthlib.oauth2 import WebApplicationClient
import requests,json,os



app = Flask(__name__)
load_dotenv()

CORS(app)

GOOGLE_CLIENT_ID = "567017800228-g1ua7nfaa3ar330hgpekn8rj477nd5o0.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET ="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"
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

client = WebApplicationClient(GOOGLE_CLIENT_ID)


def get_google_provider_cfg():
   
    return requests.get(GOOGLE_DISCOVERY_URL).json()


def login():
    google_provider_cfg = get_google_provider_cfg()

    authorization_endpoint = google_provider_cfg["authorization_endpoint"]
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri="https://0.0.0.0:443/login/callback",
        scope=["openid", "email", "profile"],
    )

    return request_uri


def callback():
    code = request.args.get("code")
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]
    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code
    )
    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )
    client.parse_request_body_response(json.dumps(token_response.json()))
    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)
    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]
        picture = userinfo_response.json()["picture"]
        users_name = userinfo_response.json()["given_name"]
        return True

    else:
        return "User email not available or not verified by Google.", 400


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/solve',methods = ['POST'])
def solve_simplex():
    unsolved_tableau = json.dumps(request.get_json())
    solution=''
    try:
        eng = matlab.engine.start_matlab()
        solution =  eng.simplex(unsolved_tableau)
    except Exception as e:
        print (f"Error starting MATLAB Engine: {e}")
    return solution

@app.route("/login")
@cross_origin('*')
def handle_login():
    return login()
@app.route('/login/callback')   
def handle_callback():
    return callback()

