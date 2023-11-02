let min = 1;
let max = 100;
let attemptNum = 0;
let clueShowed = false;
let isFinished = false;

const attemptsContainer = document.querySelector('.attempts-block__num');
const clueTxtField = document.querySelector('.clue-block__clue-text');
attemptsContainer.innerText = '0';

function createRandom (min, max) {
    // let minN = Math.ceil();
    // let maxN = Math.floor();
    window.madeNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

createRandom(min, max);


const notRequiredSymbs = new RegExp(/[^0-9]/);
const inputField = document.querySelector('.workfield__input');
document.querySelector('.workfield__submit-btn').addEventListener('click', () => {
    
    const userInput = inputField.value;
    inputField.value = '';
    
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
}

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
    const txtField = document.querySelector('.chat__text-field');
    createRandom(min, max);
    attemptNum = 0;
    clueShowed = false;
    isFinished = false;
    clueTxtField.innerText = 'Нет подсказок';
    attemptsContainer.innerText = '0';
    txtField.innerHTML = '';
    createMessage('Хорошо, начинаем заново', false);
    createMessage('Я загадал новое число, попытки обнулены', false);
    createMessage('Твой ход', false);
}


function getRightForm (num, forms) {
  
      let n = Math.abs(num);
      n %= 100;
    
      if (n >= 5 && n <= 20) {
          return forms[2];
        }
  
      n %= 10;
      
      if (n === 1) {
          return forms[0];
      }
  
      if (n >= 2 && n <= 4) {
          return forms[1];
      }

      return forms[2];
  }


  document.querySelector('.reset-btn').addEventListener('click', () => {
    restartGame();
  })