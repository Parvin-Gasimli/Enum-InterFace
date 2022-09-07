//Class Implementing the interface
var Todo = /** @class */ (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
// Class which contains list of Todos and the actions
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    //Create a new Todo Item
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    // returns all the todos
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    TodoList.allTodos = new Array();
    return TodoList;
}());
// window.onload is a pure JS
window.onload = function () {
    //HTMLInput Element for Task and description
    var task = document.getElementById("todoName");
    var description = (document.getElementById("todoDescription"));
    // added a event listner for add click
    document
        .getElementById("add")
        .addEventListener("click", function () { return toAlltask(task.value, description.value); });
};
//Function called when add is clicked
function toAlltask(task, description) {
    var todo = new TodoList();
    // adds the task to list
    todo.createTodoItem(task, description);
    //Fetched the updated list and create a list item for UI
    var div = document.getElementById("todoList");
    var list = "<dl class='dl-horizontal'>";
    for (var index = 0; index < TodoList.allTodos.length; index++) {
        list =
            list +
                " <dt> " +
                TodoList.allTodos[index].name +
                " </dt> <dd>" +
                TodoList.allTodos[index].description +
                "</dd>";
    }
    list += "</dl>";
    div.innerHTML = list;
    //Casting
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
//Data TypeScript
var number = 12;
number = 34;
console.log(number);
var city;
city = "Baku";
console.log(city);
var isThere = true;
console.log(isThere);
// let data:any
// data=12;
// data="Hello Code"
// console.log(data);
// let numberList:number[]=[1,2,3,4,5,6,]
// console.log(numberList[2]);
var cityList = ["baku", "Naxcivan", "gence"];
console.log(cityList[0]);
//Enums
var Colors;
(function (Colors) {
    Colors["Red"] = "Red";
    Colors["Green"] = "Green";
    Colors["Blue"] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors.Blue);
//Functions
function getNumberSum(nume1, nume2) {
    return nume1 + nume2;
}
console.log(getNumberSum(442, 22));
