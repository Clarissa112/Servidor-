document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');
    const username = usernameInput.value.trim();
    const messageText = messageInput.value.trim();
    const messagesContainer = document.getElementById('messagesContainer');
    
    if (username && messageText) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';

        const timeStamp = new Date().toLocaleString();
        messageElement.innerHTML = `<strong>${username} (${timeStamp}):</strong> ${messageText}`;
        
        messagesContainer.appendChild(messageElement);
        
        // Limitar a 10 mensajes
        if (messagesContainer.children.length > 10) {
            messagesContainer.removeChild(messagesContainer.firstChild);
        }

        // Aviso para el lector de pantalla
        const ariaLive = document.createElement('div');
        ariaLive.setAttribute('aria-live', 'polite');
        ariaLive.textContent = `${username} ha dejado un mensaje.`;
        messagesContainer.appendChild(ariaLive);
        setTimeout(() => messagesContainer.removeChild(ariaLive), 3000); // Elimina el aviso después de 3 segundos

        // Limpiar los campos de entrada
        clearInputs();
    }
});

// Función para limpiar los campos de entrada
function clearInputs() {
    document.getElementById('usernameInput').value = '';
    document.getElementById('messageInput').value = '';
}



