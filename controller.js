console.log('Lala')

// variables
let div1 = document.querySelector('#div1')
let inputText = document.querySelector('#bakingInput')
var addBtn = document.querySelector('#addButton')
var displayList = document.querySelector('#bakeList')

//event listener 
window.addEventListener('load', newBoard);
addBtn.addEventListener('click', function(){
    addList()
    showList()
})


//function 
let morningBoard = ''

function newBoard(event){
    morningBoard = new bakeBoard('Morning')


}
function addList(event){
    morningBoard.addInput(inputText.value )

}

function showList(event){
    morningBoard.bakeList.list.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        displayList.appendChild(li);
      })
}



