from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import queries
import hashlib

app = FastAPI(docs_url='/')

origins = [
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8000",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/password")
def password(password):
    encoded = password.encode('utf8')
    password_coded = hashlib.sha256(encoded).hexdigest()
    return f'This is the coded password: {password_coded}'

@app.post("/user")
def new_user(name, email):
    queries.new_user(name, email)
    return f"Heya {name}! Welcome to the community!"


@app.get("/bloggers")
def post():
    return queries.postting()

@app.post("/blog")
def new_post(title, description):
    queries.new_post(title, description)
    return f"{title},{description}"
