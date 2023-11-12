export default function getDOMElements () {
    return {
        chatInput: document.querySelector('.chat__input'),
        clueTxtField: document.querySelector('.clue-block__clue-text'),
        chatTextField: document.querySelector('.chat__text-field'),
        attemptsContainer: document.querySelector('.attempts-block__num'),
        chatSubmitBtn: document.querySelector('.chat__submit-btn'),
        resetBtn: document.querySelector('.reset-btn'),
        
        rangeFromInput: document.querySelector('.from'),
        rangeToInput: document.querySelector('.to'),
        setRangeBtn: document.querySelector('.range-settings__set-btn'),
        rangeFromCont: document.querySelector('.current-range__from'),
        rangeToCont: document.querySelector('.current-range__to'),
    }
}