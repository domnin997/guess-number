let min = 1;
let max = 100;
let attemptNum = 0;


function createRandom (min, max) {
    // let minN = Math.ceil();
    // let maxN = Math.floor();
    window.madeNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(madeNum);
}

createRandom(min, max);

const inputField = document.querySelector('.workfield__input');

document.querySelector('.workfield__submit-btn').addEventListener('click', (event) => {
    const userNum = inputField.value;
    ++attemptNum;
    document.querySelector('.attempts-num').innerText = attemptNum;
    inputField.value = '';
    checkNumber(userNum);
})





function createMessage (text, isFromUser) {
    const message = document.createElement('div');
          message.innerHTML = `<p class="message">${text}</p>`;
    
    if (!isFromUser) {
        message.classList.add('computer-msg');
    } else {
        message.classList.add('user-msg');
    }

    document.querySelector('.chat__text-field').append(message);
    // добавить в чат
}

function checkNumber (num) {
    
    createMessage(`Мое число: ${num}`, true);

    if (attemptNum > 3) {
        // Код для подсветки подсказки
    }

    if (num < min || num > max) {
        
        createMessage('Упс, это число вне диапазона');
    } else if (num < madeNum && num >= min) {
        
        createMessage('Это число меньше загаданного');
    } else if (num > madeNum && num <= max) {

        createMessage('Это число больше загаданного');
    } else if (num == madeNum) {

        createMessage(`Ура! Угадал за ${attemptNum} попыток!`);
    }
}