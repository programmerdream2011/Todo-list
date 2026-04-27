let btn = document.querySelector("#addBtn");
let list = document.querySelector("#list");
let input = document.querySelector("#input");

btn.onclick = function(){
    if(input.value === "") return; // защита от пустого

    let li = document.createElement("li");
    li.textContent = input.value+" ";

    let button = document.createElement("button");
    button.textContent = "Delete";

    // удалить задачу
    button.onclick = function(){
        li.remove();
    };

    // отметить выполненной
li.onclick = function(e){
    if(e.target.tagName === "BUTTON") return;
    li.classList.toggle("done");
};

    li.appendChild(button);
    list.appendChild(li);

    input.value = ""; // очистка поля
};