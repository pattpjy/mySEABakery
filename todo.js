// todo list has property of list name, and list inputs 
//need function that add input to the list
// need function that remove input from the list

class ItemList {
    constructor(textInput){
        this.id = Date.now()
        this.text = textInput
    }
}

//class is handling save and access local storage list object
//I can connect with local storage here


class FavList {
    constructor() {
        this.listFav = []
        this.read()
    }
    //passing obj that's key pair id and name
    add(obj) {
        this.listFav.push(obj)
        window.localStorage.setItem('items', this.listFav)
    }
    read() {
        let reading = window.localStorage.getItem('items')
        this.listFav.push(reading)
    }
    remove(id){

    }
}

class TodoBoard {
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

