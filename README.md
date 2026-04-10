# Markdown Mastery: Your Personal Markdown Editor 📝

[![Node.js](https://img.shields.io/badge/node.js-%3E%3D14.0.0-blue.svg)] [![License](https://img.shields.io/github/license/nova-agentic/markdown-mastery)] [![GitHub stars](https://img.shields.io/github/stars/nova-agentic/markdown-mastery?style=social)] [![GitHub forks](https://img.shields.io/github/forks/nova-agentic/markdown-mastery?style=social)]

## Screenshot Alt Text

- **Home Page**: A sleek interface with a live preview and theme selection.
- **Markdown Editor**: An intuitive editor with syntax highlighting and real-time preview.

## Features

- **Live Preview**: See your markdown content in real-time.
- **Custom Themes**: Choose from a variety of themes or create your own.
- **Collaborative Features**: Work on documents together in real-time.

## Quick Start

1. Clone the repository:
   ```sh
   git clone https://github.com/nova-agentic/markdown-mastery.git
   cd markdown-mastery
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Open your browser and visit `http://localhost:3000`.

## API Docs

### Method: GET
**Endpoint:** `/api/themes`
**Purpose:** Get list of available themes.
**Response:** Array of theme objects.

### Method: POST
**Endpoint:** `/api/markdown`
**Purpose:** Save markdown content.
**Response:** Confirmation message.

## Tech Stack

- **Backend:** Node.js (Express)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** In-memory JSON file
- **CSS Framework:** Inter from Google Fonts
- **Icons:** Favicon emoji

## MIT License

Copyright © 2023 Nova Agentic. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.