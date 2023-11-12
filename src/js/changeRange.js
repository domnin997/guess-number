import createMessage from "./messageCreator.js";
import { onlyNumsInput } from "./utilites.js";
import getDOMElements from "./DOMElements.js";

export const handleRangeChange = function (restartGameFunc, updateRange) {

    const {rangeFromInput, rangeToInput, setRangeBtn, rangeFromCont, rangeToCont} = getDOMElements();
    
    [rangeFromInput, rangeToInput].forEach((input) => {
        input.addEventListener('keypress', onlyNumsInput);
    });

    setRangeBtn.addEventListener('click', () => {
        
        if (rangeFromInput.value && rangeToInput.value) {

            const newMin = +rangeFromInput.value;
                            rangeFromInput.value = '';
                            
            const newMax = +rangeToInput.value;
                            rangeToInput.value = '';
                            
            if (newMin > newMax || newMin === newMax) {
                createMessage('Диапазон должен идти по возрастанию, а его границы не должны быть равны', false);
            
            } else {

                updateRange(newMin, newMax);
                rangeFromCont.innerText = newMin;
                rangeToCont.innerText = newMax;

                restartGameFunc();
                
            }

        } else {
            createMessage('Укажите весь диапазон', false);
        }
    })

}