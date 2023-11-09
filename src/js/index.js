import getRightForm from "./wordFormSelector.js";
import handleRangeChange from "./changeRange.js";
import createMessage from "./messageCreator.js";

handleRangeChange(createMessage, restartGame);

window.min = 1;
window.max = 100;

createRandomNum (min, max);

let attemptNum = 0;
let clueShowed = false;
let isFinished = false;

const attemptsContainer = document.querySelector('.attempts-block__num');
      attemptsContainer.innerText = '0';

const clueTxtField = document.querySelector('.clue-block__clue-text');
const chatTextField = document.querySelector('.chat__text-field');
const chatInput = document.querySelector('.chat__input');

document.querySelector('.chat__submit-btn').addEventListener('click', () => {
    
    const notRequiredSymbs = new RegExp(/[^0-9]/);
    const userInput = chatInput.value.trim();
                      chatInput.value = '';
    
    if (isFinished) {
        userInput === '+' ? restartGame() : createMessage(`Не распознал`, false);

    } else {
        if (!notRequiredSymbs.test(userInput)) {
            ++attemptNum;
            attemptsContainer.innerText = attemptNum;
            checkNumber(userInput);
        } else {
            createMessage(`${userInput}`, true);
            createMessage('Нужно ввести только целое число', false);
        }
    }

    scrollDown();
})

function checkNumber (num) {
    
    createMessage(`Мое число: ${num}`, true);

    if (num < min || num > max) {
        
        createMessage('Упс, это число вне диапазона');
    } else if (num < madeNum && num >= min) {
        
        createMessage('Это число меньше загаданного');
    } else if (num > madeNum && num <= max) {

        createMessage('Это число больше загаданного');
    } else if (num == madeNum) {

        createMessage(`Ура! Угадал за ${attemptNum} ${getRightForm(attemptNum, ['попытку', 'попытки', 'попыток'])}!`);
        isFinished = true;
        createMessage('Можно начать игру заново - просто отправь мне +');
    }

    isClueNeeded();
}

function isClueNeeded () {
    
    if (attemptNum > 3 && clueShowed === false && !isFinished) {
      
      let numType;
      
      madeNum % 2 === 0 ? numType = 'четное' : numType = 'нечетное';

      const clueMessage = `Даю тебе подсказку: мое число ${numType}`;
      createMessage(clueMessage, false);
      clueTxtField.innerText = `Загаданное число - ${numType}`;
      clueShowed = true;
    
    } 
}

function restartGame () {
    createRandomNum (min, max);
    attemptNum = 0;
    clueShowed = false;
    isFinished = false;
    clueTxtField.innerText = 'Нет подсказок';
    attemptsContainer.innerText = '0';
    chatTextField.innerHTML = '';
    createMessage('Хорошо, начинаем заново', false);
    createMessage('Я загадал новое число, попытки обнулены', false);
    createMessage('Твой ход', false);
}

  document.querySelector('.reset-btn').addEventListener('click', () => {
    restartGame();
  })


function createRandomNum (min, max) {
    window.madeNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function scrollDown () {
    chatTextField.scrollTop = chatTextField.scrollHeight;
}