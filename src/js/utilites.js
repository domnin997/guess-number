import getDOMElements from "./DOMElements.js";

const {chatTextField} = getDOMElements();

export const onlyNumsInput = function (e) {
    if (!/\d/.test(e.key))  {
        e.preventDefault();
    }
}

export const scrollDown = function () {
    chatTextField.scrollTop = chatTextField.scrollHeight;
}

export const createRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}