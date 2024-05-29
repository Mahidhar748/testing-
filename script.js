document.getElementById('chatbot-button').addEventListener('click', function() {
    document.getElementById('assistant-popup').style.display = 'block';
});

document.getElementById('close-assistant').addEventListener('click', function() {
    document.getElementById('assistant-popup').style.display = 'none';
});

document.getElementById('send-message').addEventListener('click', async function() {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userInput })
            });

            const data = await response.json();
            alert(`Bot says: ${data.reply}`);
            document.getElementById('user-input').value = '';
        } catch (error) {
            alert('Error communicating with the server.');
            console.error('Error:', error);
        }
    } else {
        alert('Please enter a message.');
    }
});