# Flask Chatbot with OpenAI API

This is a simple Flask application that provides a chatbot interface using the OpenAI API. The chatbot allows users to enter messages and receive responses generated by the OpenAI language model.

## Requirements

To run this application, you'll need:

- Python 3.7 or higher
- Flask
- python-dotenv
- OpenAI API key

## Installation

1. Clone the repository to your local machine.
2. Create a virtual environment and activate it:
    ```
    python3 -m venv venv
    source venv/bin/activate
    ```
3. Install the required Python packages:
    ```
    pip install -r requirements.txt
    ```
4. Create a `.env` file in the root directory of the project and add your OpenAI API key as follows:
    ```
    OPENAI_API_KEY=your_api_key_here
    ```
5. Start the Flask server:
    ```
    flask run
    ```

## Usage

Once the server is running, you can access the chatbot by visiting `http://localhost:5000` in your web browser. The chat interface allows you to enter messages and receive responses generated by the OpenAI language model.

## Parameters

The OpenAI API provides several parameters that can be adjusted to control the behavior of the language model. These parameters can be adjusted in the `app.py` file:

- `max_tokens`: Controls the maximum number of tokens (words) that the language model will generate in response to a prompt.
- `temperature`: Controls the "creativity" of the language model, with higher values leading to more creative but less coherent responses.
- `n`: Controls the number of responses that the language model will generate for a given prompt.

You can experiment with different parameter values to see how they affect the behavior of the chatbot.

## Contributing

If you'd like to contribute to this project, you can:

- Fork the repository
- Make your changes
- Submit a pull request
