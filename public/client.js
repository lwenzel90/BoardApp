$(document).ready(function(){
    $.getJSON("/api/todos")
    .done(function(data){
        console.log(data);
    })
});

function addTodos(todos){
    todos.array.forEach(element => {
       
    });
}