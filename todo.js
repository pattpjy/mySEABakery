// todo list has property of list name, and list inputs 
//need function that add input to the list
// need function that remove input from the list

class todoList {
    constructor(name){
        this.name = name
        this.list = [] // A list of ordered strings is a good case for an array
    }
}

class bakeBoard {
    constructor(name){
        this.name = name
        this.bakeList = new todoList('Morning Bake')
        //keep track of data goin to the list
        //adding data to the list
        //remove data from the list
        //starred the difficult input
        //way to make in progress
    }
    addInput(text){
        this.bakeList.list.push(text)
    }
    removeInput(textIndex){
        this.bakeList.list.splice(textIndex,1)
    }

}

