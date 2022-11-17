// variables
var inputText = document.querySelector('#bakingInput')
var addBtn = document.querySelector('#addBtn')
var displayList = document.querySelector('#bakeList')

//event listener and function goes here
//window.onload - create new bakeboard but also store it somewhere
addBtn.addEventListener('click', addList)


function addList(){
    inputText.value 
    addInput()
}

function showList(){
    bakeList.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        displayList.appendChild(li);
      })
}
addList()


console.log('hello')