const form = document.querySelector('#chat-form');
const messageInput = document.querySelector('#message-input');
const messageList = document.querySelector('#message-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  messageInput.value = '';
  addMessage('user', message);
  fetch('/chat', {
    method: 'POST',
    body: JSON.stringify({ prompt: message }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => addMessage('bot', data))
});

function addMessage(sender, message) {
  const listItem = document.createElement('li');
  listItem.classList.add(sender);
  listItem.textContent = message;
  messageList.appendChild(listItem);
}
