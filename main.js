let addTaskButton = document.getElementById("addTask");
let taskContainer = document.getElementById("taskContainer");
let inputField = document.getElementById("inputField");

addTaskButton.addEventListener('click', function(){
    var paragraph = document.createElement("p");
    var delButton = document.createElement("button");

    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    taskContainer.appendChild(paragraph);
    taskContainer.appendChild(delButton);

    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    delButton.addEventListener('click', function(){
        taskContainer.removeChild(paragraph);
        taskContainer.removeChild(delButton);
    })
})