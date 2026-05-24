# Socket.IO Real-Time Chat Application

A simple real-time chat application built using Socket.IO, Node.js, and Express.

This project enables multiple users to communicate instantly through WebSockets with live message broadcasting.

---

# Features

- Real-time messaging using Socket.IO
- Multi-user support
- User join notifications
- User disconnect notifications
- Clean and minimal UI
- Auto-scroll chat window
- Enter-to-send functionality
- Lightweight frontend with vanilla JavaScript

---

# Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Realtime Communication: Socket.IO

---

# Project Structure

```bash
chat-app-websocket/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/callmecomder/chat-app-websocket.git
cd chat-app-websocket
```

---

## 2. Install Dependencies

```bash
cd server
npm install
```

---

## 3. Start Backend Server

```bash
node server.js
```

Server runs on:

```bash
http://localhost:5000
```

---

## 4. Run Frontend

Open `client/index.html` in browser.

OR use VS Code Live Server extension for better development experience.

---

# How It Works

- Users enter a username
- Socket.IO establishes a websocket connection
- Messages are broadcasted to all connected users in real-time
- Join/leave events are displayed dynamically

---

# Screenshots

## Chat Interface

Add your screenshots inside a `screenshots` folder.

<img width="678" height="657" alt="Screenshot 2026-05-24 at 7 40 24 PM" src="https://github.com/user-attachments/assets/c0bdf2ca-c2c9-4d50-8e1a-54c273aa6c38" />

<img width="678" height="657" alt="Screenshot 2026-05-24 at 7 40 28 PM" src="https://github.com/user-attachments/assets/b8b44ed3-2dc1-4c9f-ab4c-27b5cbebd615" />


---

# Socket Events Used

| Event | Description |
|---|---|
| `connection` | Triggered when a user connects |
| `join` | User joins chat |
| `sendMessage` | Sends message to server |
| `message` | Broadcasts messages |
| `disconnect` | Triggered when user leaves |

---

# Future Improvements

- Private chat rooms
- Authentication & JWT
- Online user list
- Typing indicator
- Message persistence using MongoDB
- Docker support
- Voice & video calling using WebRTC
- Responsive mobile UI

---

# Learning Outcomes

This project helped in understanding:

- WebSocket communication
- Event-driven architecture
- Real-time data flow
- Client-server communication
- Socket.IO rooms & broadcasting
- Backend integration with frontend

---

# Author

Raghav Seth

- GitHub: https://github.com/callmecomder

---

# License

This project is open-source and available under the MIT License.
