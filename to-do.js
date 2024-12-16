var listIndex = 0;

function onAddButtonClick(e) {
    const inputText = document.getElementById("userInput");
    let text = inputText.value;
    if(text.length === 0) {
        return
    }
    listIndex += 1;
    let div = document.getElementById("listArea");
    if(div.childNodes.length === 0) {
        listIndex = 1;
    }
    let textElement = document.createTextNode("List Item " + listIndex + ": " + text);
    let breakTag = document.createElement("br");
    let item = document.createElement("item");
    item.appendChild(textElement);
    item.appendChild(breakTag);
    div.appendChild(item);
}

function onClearButtonClick(e) {
    let div = document.getElementById("listArea");
    while(div.childNodes.length > 0) {
        div.removeChild(div.lastChild);
    }
    listIndex = 0;
}

function onDoubleClick(e) {
    if (e.target.classList.contains("completed")) {
        e.target.classList.remove("completed"); 
    } else {
        e.target.classList.add("completed");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("addButton");
    let clearButton = document.getElementById("clearButton");
    let div = document.getElementById("listArea");

    addButton.addEventListener("click", onAddButtonClick);
    clearButton.addEventListener("click", onClearButtonClick);
    
    div.addEventListener("dblclick", onDoubleClick);
    
});

