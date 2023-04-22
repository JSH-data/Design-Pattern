import { createInstance } from './single.js'

const createButton = document.getElementById("create-btn");
const container = document.getElementById("container");
const counter = document.getElementById("counter");


function addBox() {
    const singleInstance = createInstance()
    const newBox = document.createElement('div');
    newBox.className = 'box'
    container.append(newBox)

    newBox.addEventListener('click', () => {
        singleInstance.increase()
        counter.innerText = singleInstance.count
    })
}

function init() {
    createButton.addEventListener("click", () => {
        addBox();
    });
}

init();
