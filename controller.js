
// variables
let div1 = document.querySelector('#div1')
let inputText = document.querySelector('#bakingInput')
var addBtn = document.querySelector('#addButton')
const displayList = document.querySelector('#bakeUnlist')
let nodeLi = document.querySelector('li')
let morningBoard = ''
const favBtn = document.querySelector('#favBtn')
// let xBtn = document.querySelector('#bakeUnlist')

//event listener 
window.addEventListener('load', newBoard);

favBtn.addEventListener('click', showFav)
addBtn.addEventListener('click', function(){
    createItem()
    showList()
    clearInput()
})
displayList.addEventListener('click',xList)
displayList.addEventListener('click',checkedList)


//function 

function newBoard(event){
    morningBoard = new TodoBoard('Morning')
    boardFavList = new FavList()
}

function createItem(event){
    addListObj = new ItemList(inputText.value)
    morningBoard.addInput(addListObj)
    boardFavList.add(addListObj)
}

function showList(event){
    let li = document.createElement('li');
    li.innerText = inputText.value;
    li.className = addListObj.id
    displayList.appendChild(li);
    let xBtn = document.createElement("SPAN");
    var txt = document.createTextNode("REMOVE");
    xBtn.className = 'close';
    xBtn.id = addListObj.id
    xBtn.appendChild(txt);
    li.appendChild(xBtn)
}

function clearInput(event){
    inputText.value = ''
}

function xList(event){
    if(event.target.classList.contains('close')){
        let clickXid = event.target.id
        let foundIndex = morningBoard.todoList.findIndex(x=> x.id.toString()===clickXid)
        let liRemove = document.getElementsByClassName(clickXid)
        morningBoard.removeInput(foundIndex)
        liRemove[0].remove()
    }
}

function checkedList(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
    }
}

function showFav(event){
    for (let i = 0; i<boardFavList['listFav'].length; i++ ){
        let li = document.createElement('li');
        li.innerText = boardFavList['listFav'][i].text
        displayList.appendChild(li);
    }
    
}












