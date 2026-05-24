const socket = io("http://localhost:8000");

const username = prompt("Enter username");

socket.emit("join", username);

const messages = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(data) {
  const div = document.createElement("div");

  div.classList.add("message");

  div.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;

  messages.appendChild(div);

  messages.scrollTop = messages.scrollHeight;
}

socket.on("message", (data) => {
  addMessage(data);
});

sendBtn.addEventListener("click", () => {
  const message = input.value;

  if (!message.trim()) return;

  socket.emit("sendMessage", message);

  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});