function createMessage (text, isFromUser) {
    const message = document.createElement('div');
          message.innerHTML = `<p class="message">${text}</p>`;
    
    if (!isFromUser) {
        message.classList.add('computer-msg');
    } else {
        message.classList.add('user-msg');
    }

    // добавить в чат
}

function checkNumber (num) {
    
    createMessage(num, true);

    if (num < min || num > max) {
        createMessage('Упс, это число вне диапазона');
    }
}