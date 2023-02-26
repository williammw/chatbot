from flask import Flask, request, jsonify
import openai
from dotenv import load_dotenv
import os
app = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    prompt = data['prompt']
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=500,
        n=1,
        stop=None,
        temperature=0.5,
    )
    return jsonify(response.choices[0].text)
