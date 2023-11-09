export default function handleRangeChange (createMessageFunc, restartGameFunc) {

    const rangeFromInput = document.querySelector('.from');
    const rangeToInput = document.querySelector('.to');
    const setRangeBtn = document.querySelector('.range-settings__set-btn');
    const rangeFromCont = document.querySelector('.current-range__from');
    const rangeToCont = document.querySelector('.current-range__to');

    function onlyNumsInput (e) {
        if (!/\d/.test(e.key))  {
            e.preventDefault();
        }
    }
    
    [rangeFromInput, rangeToInput].forEach((input) => {
        input.addEventListener('keypress', onlyNumsInput);
    });

    setRangeBtn.addEventListener('click', (e) => {
        
        if (rangeFromInput.value && rangeToInput.value) {

            const newMin = +rangeFromInput.value;
                            rangeFromInput.value = '';
                            
            const newMax = +rangeToInput.value;
                            rangeToInput.value = '';
                            
            if (newMin > newMax || newMin === newMax) {
                createMessageFunc('Диапазон должен идти по возрастанию, а его границы не должны быть равны', false);
            
            } else {

                window.min = newMin;
                window.max = newMax;

                rangeFromCont.innerText = newMin;
                rangeToCont.innerText = newMax;

                restartGameFunc();
            }

        } else {
            createMessageFunc('Укажите весь диапазон', false);
        }
    })

}