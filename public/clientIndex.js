function getNewBoard(name, url) {
  return $(`<a href="${url}"> <div class="board"><div class="cardContainer"><h3>${name}</h3></div></div></a>`);
}

function getBoards(boards) {
  // console.log(boards);
  boards.forEach((board) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    const url = `/${board._id}`;
    const newBoard = getNewBoard(board.name, url);
    $('#addBoard').after(newBoard);
  });
}

function addNewBoard(json) {
  const { name, id } = json;
  if ($('a:last').length !== 0) {
    $('a:last').after(getNewBoard(name, id));
  } else {
    $('#addBoard').after(getNewBoard(name, id));
  }
}

// listeners

$(document).ready(() => {
  $.getJSON('/api/boards')
    .then(getBoards);
});

const error = {
  msg: '<p style="color: red">Error please enter a name</p>',
  toggled: false,
};

const input = $('#boardInput');
$('button').click(() => {
  if (input.val() !== '') {
    if (error.toggled) {
      $('p').remove();
      error.toggled = false;
    }
    $.post('/api/boards', { name: input.val() })
      .then((data) => {
        addNewBoard(data);
      });
  } else if (!error.toggled) {
    error.toggled = true;
    $('input').after(error.msg);
  }
});

$('.resizeAddBoard').click(() => {
  $('#hiddenForm').toggleClass('hidden');
  $('button').toggleClass('hidden');
});
