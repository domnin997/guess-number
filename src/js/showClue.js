import getDOMElements from "./DOMElements.js";
import createMessage from "./messageCreator.js";

export const showClue = function (madeNum) {
    
    const {clueTxtField} = getDOMElements();
 
    const numType = (madeNum % 2 === 0) ? 'четное' : 'нечетное';

    const clueMessage = `Даю тебе подсказку: мое число ${numType}`;
    
    createMessage(clueMessage, false);
    
    clueTxtField.innerText = `Загаданное число - ${numType}`;
}