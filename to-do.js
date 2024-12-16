var listIndex = 0;

function onAddButtonClick(e) {
    const inputText = document.getElementById("userInput");
    let text = inputText.value;
    if(text.length === 0) {
        return
    }
    listIndex += 1;
    let div = document.getElementById("listArea");
    let textElement = document.createTextNode("List Item " + listIndex + ": " + text);
    let breakTag = document.createElement("br");
    div.appendChild(textElement);
    div.appendChild(breakTag);
   }

document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("addButton");
    addButton.addEventListener("click", onAddButtonClick);
});

