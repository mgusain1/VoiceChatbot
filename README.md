# Voice-Activated Chatbot with OpenAI GPT-3.5

This project is a voice-activated chatbot that integrates OpenAI's GPT-3.5 model to respond to user queries. The system uses **Speech Recognition** for listening to commands and **Text-to-Speech (TTS)** for providing audio feedback. The project is split into two parts:

- **Backend (Python)**: A Flask server that handles requests, listens for voice commands, and communicates with OpenAI.
- **Frontend (React)**: A user-friendly interface that allows users to interact with the chatbot via text or voice.

## Features

- **Voice Command Activation**: Uses speech recognition to activate the chatbot with a key phrase.
- **Speech-to-Text**: Converts spoken words into text for processing.
- **ChatGPT Integration**: Sends user queries to OpenAI's GPT-3.5 API for intelligent responses.
- **Text-to-Speech**: Responds with voice output for user-friendly interaction.
- **React Frontend**: A modern React app to interact with the backend and display responses.

## Setup

### Prerequisites

- Python 3.x
- Node.js and npm (for React frontend)
- OpenAI API Key

### Backend Setup (Python)

1. Clone the repository:
   using the https clone
   git clone <repository-url>
   cd backend
2. run backend with **python main.py**
3. then head over to frontend and run **npm start**

**IMP :- in the .env file you need to insert your own chatgpt API key**
