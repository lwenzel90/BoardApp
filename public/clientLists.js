const urlArr = window.location.pathname.split('/');
const id = urlArr[urlArr.length - 1];

$(document).ready(() => {
  $.getJSON(`/api/boards/${id}`)
    .then((data) => {
      /* eslint no-console: ["error", { allow: ["log"] }] */
      console.log(data);
    });
});
