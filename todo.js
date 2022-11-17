// todo list has property of list name, and list inputs 
//need function that add input to the list
// need function that remove input from the list

class todoList{
    constructor(name){
        this.name = name
        this.list = [] // or object
    }
}
class bakeBoard{
    constructor(){
        bakeList = new todoList('Morning Bake')
        //keep track of data goin to the list
        //adding data to the list
        //remove data from the list
        //starred the difficult input
        //way to make in progress
    }
    addInput(text){
        bakelist.push(text)
    }
    removeInput(textIndex){
        bakelist.splice(textIndex,1)
    }

}