$(document).ready(function(){
    $.getJSON("/api/boards")
    .then(getBoards)
});

function getTodos(todos){
    todos.forEach(todo => {
       let newTodo = $(`<li> ${todo.name} </li>`);
       $(`.list`).append(newTodo);
    });
}

function getBoards(boards){
    console.log(boards);
    boards.forEach(board => {
       let newBoard = $(`<a href="/${board._id}"> <div class="board"><div class="cardContainer"><h3>${board.name}</h3></div></div></a>`);
       $(`#addBoard`).after(newBoard);
    });
}

function postBoard(){
    
}

$(".resizeAddBoard").click(function(){
    $("#hiddenForm").toggleClass("hidden");
    $("button").toggleClass("hidden");
});

$("button").click(function(){
    $.post("/api/boards")
    
})