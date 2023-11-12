import getDOMElements from "./DOMElements.js";
import getRightForm from "./wordFormSelector.js";
import {handleRangeChange} from "./changeRange.js";
import createMessage from "./messageCreator.js";
import { showClue } from "./showClue.js";
import { checkRange } from "./checkRange.js";
import { onlyNumsInput } from "./utilites.js";
import { scrollDown, createRandomNum } from "./utilites.js";

const {chatInput, clueTxtField, chatTextField, attemptsContainer, chatSubmitBtn, resetBtn} = getDOMElements();

let attemptNum = 0;
let clueShowed = false;
let isFinished = false; 

let range = {
    min: 1,
    max: 100
}

let madeNum = createRandomNum (range.min, range.max);

function updateRange (min, max) {
    range.min = min;
    range.max = max;
}

handleRangeChange(restartGame, updateRange);
attemptsContainer.innerText = '0';

chatInput.addEventListener('keypress', onlyNumsInput);

resetBtn.addEventListener('click', () => {restartGame()});

chatSubmitBtn.addEventListener('click', () => {
    
    if (chatInput.value === '') {
        return;
    } else if (isFinished) {
        createMessage('Ты уже выиграл! Можно начать игру заново');
        
    } else if (!isFinished) {
        ++attemptNum;
        attemptsContainer.innerText = attemptNum;
        checkNumber(+chatInput.value);
    } 

    chatInput.value = '';
    scrollDown();
})

function checkNumber (num) {
    
    createMessage(`Мое число: ${num}`, true);
    
    if (num === madeNum) {
        createMessage(`Ура! Угадал за ${attemptNum} ${getRightForm(attemptNum, ['попытку', 'попытки', 'попыток'])}!`);
        createMessage('Можно начать игру заново');
        isFinished = true;
    } else {
        checkRange(num, range.min, range.max, madeNum);
    }

    isClueNeeded();
}

function isClueNeeded () {
    if (attemptNum > 3 && clueShowed === false && !isFinished) {
        showClue(madeNum);
        clueShowed = true;
    } 
}

function restartGame () {
    madeNum = createRandomNum (range.min, range.max);
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