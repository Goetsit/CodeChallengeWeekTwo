
$(document).ready(readyNow);

function readyNow(){
  console.log('js');
  $('#generate').on('click', codeChallenge);
  $('body').on('click','.swapBtn', colors);
  $('body').on('click','.deleteBtn', deleteButton);
}

function codeChallenge() {

  console.log('code challenge');
  $('body').append('<div class = "codeChall"></div>');


  newButtons(); //adds SWAP and DELETE buttons
  counter(); //function for count

}

function counter(){

  var count = $(this).data("count") || 0;
  $(this).data("count", ++count);

  $('.codeChall').parent().append('<h2>'+count+'</h2>');

}//counts up

function newButtons(){
  $('.codeChall').empty(); //getting duplicates, empty() works to prevent that
  $('.codeChall').append('<button type="button" class = "swapBtn">SWAP</button>'); //append swamp button
  $('.codeChall').append('<button type="button" class = "deleteBtn">DELETE</button>'); //append delete button


}

function colors(){
  console.log('my buttons hate me');

}

function deleteButton(){

console.log('button delete');
  //$(this).parent().parent().remove();
}
