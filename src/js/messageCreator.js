export default function createMessage (text, isFromUser) {
    
    const message = document.createElement('div');
          message.innerHTML = `<p class="message">${text}</p>`;
    
    if (!isFromUser) {
        message.classList.add('computer-msg');
    } else {
        message.classList.add('user-msg');
    }

    document.querySelector('.chat__text-field').append(message);
}