// alert("hi");
let addButton= document.querySelector(".add-button");
let taskContainer=document.querySelector(".task-container");
let input=document.querySelector(".input");

addButton.addEventListener('click', function(){
    var div1=document.createElement("div");
    div1.classList.add("tasks");
    taskContainer.appendChild(div1);
    var spam=document.createElement("spam");
    spam.classList.add("new-task");
    spam.innerText=input.value;
    div1.appendChild(spam);
    var del=document.createElement("button");
    del.classList.add("X");
    del.textContent="x";
    div1.appendChild(del);
    input.value="";
    del.addEventListener("click", function(){
        taskContainer.removeChild(div1);
    });
    spam.addEventListener("click", function(){
        spam.style.textDecoration="line-through";
    });
    spam.addEventListener("dbclick", function(){
        spam.style.textDecoration="none";
    });
});