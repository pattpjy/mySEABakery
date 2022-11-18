
// variables
let div1 = document.querySelector('#div1')
let inputText = document.querySelector('#bakingInput')
var addBtn = document.querySelector('#addButton')
var displayList = document.querySelector('#bakeUnlist')
let nodeLi = document.querySelectorAll('li')
let morningBoard = ''
let xBtn = document.querySelector('#bakeUnlist')

//event listener 
window.addEventListener('load', newBoard);
addBtn.addEventListener('click', function(){
    createItem()
    showList()
    clearInput()
})

xBtn.addEventListener('click',xList)
// need to check how to do xbtn 

//function 
function newBoard(event){
    morningBoard = new todoBoard('Morning')
}

function createItem(event){
    addListObj = new itemList(inputText.value)
    morningBoard.addInput(addListObj)
}

function showList(event){
    let li = document.createElement('li');
    li.innerText = inputText.value;
    li.id = addListObj.id
    displayList.appendChild(li);
    let xBtn = document.createElement("SPAN");
    var txt = document.createTextNode("remove");
    xBtn.className = 'close';
    xBtn.id = addListObj.id
    xBtn.appendChild(txt);
    li.appendChild(xBtn)
}

function clearInput(event){
    inputText.value = ''
}

function xList(event){
    //Please explain event.target.classList
if(event.target.classList.contains('close')){
    var clickXid = event.target.id
    
    var foundIndex = morningBoard.todoList.findIndex(x=> x.id.toString()===clickXid)
    morningBoard.removeInput(foundIndex)
    var li = document.querySelector(`${clickXid}`)
    }
}

// var foundId = savedPosters.findIndex(function (savedPoster) { 
//     return clickImageId === `${savedPoster.id}`
//   })
//morningBoard.todoList[0].id











