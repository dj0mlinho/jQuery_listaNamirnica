// first way - delete funkcija u okviru prve funckije
/*
let itemRow = "";
let itemInput = $('.item');


$('.add-item').on('click', function () {
  let item = itemInput.val();
  itemRow = '<tr class="row"><td>' + item + '</td><td><button class="btn btn-danger delete">Obriši</button></td></tr>';
  if (item != "") {
    $('.item-list tbody').append(itemRow);
    itemInput.val("").focus();
  } else {
    alert("unesite namirnicu")
  }
  $('.delete').on("click", function () {
    $(this).closest('tr').remove();
    itemInput.focus()
  })
})
*/
// second way - delete funkcija zasebno tako što selektujemo ono što postoji i bez prvog klika, a u okviru toga context


let itemRow = "";
let itemInput = $('.item');


$('.add-item').on('click', function () {
  let item = itemInput.val();
  itemRow = '<tr class="row"><td>' + item + '</td><td><button class="btn btn-danger delete">Obriši</button></td></tr>';
  if (item != "") {
    $('.item-list tbody').append(itemRow);
    itemInput.val("").focus();
  } else {
    alert("unesite namirnicu")
  }
})


$('tbody').on("click", '.delete', function () {
  $(this).closest('tr').remove();
  itemInput.focus()
})