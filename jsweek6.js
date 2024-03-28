window.onload = function(){
    var btn = document.getElementById("btnadd");
    btn.onclick = AddToDo;
};
function AddToDo(){
    var myinput = document.getElementById("myinput").value;
    var todo = document.getElementById("todo");
    var newtextnode = document.createTextNode(myinput);
    var newLi = document.createElement("li");
    newLi.appendChild(newtextnode);
    todo.appendChild(newLi);
}