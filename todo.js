// todo list has property of list name, and list inputs 
//need function that add input to the list
// need function that remove input from the list

class itemList {
    constructor(textInput){
        this.id = Date.now()
        this.text = textInput
    }
}

class todoBoard {
    constructor(name){
        this.name = name
        this.todoList = []
        }
    addInput(listObj){
        this.todoList.push(listObj)
    
        //remove data from the list
        //starred the difficult input
        //way to make in progress
    }
    removeInput(id){
       var removeIndex = this.todoList.indexOf(id)
       this.todoList.splice(removeIndex,1)
    }

}

