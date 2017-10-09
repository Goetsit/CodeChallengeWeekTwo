
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

  $('.codeChall').parent().append('<p>'+count+'<p>');

}//counts up

function newButtons(){
  $('.codeChall').empty(); //getting duplicates, empty() works to prevent that
  $('.codeChall').append('<button type="button" class = "swapBtn">SWAP</button>'); //append swamp button
  $('.codeChall').append('<button type="button" class = "deleteBtn">DELETE</button>'); //append delete button


}

function colors(){


  if($(this).parent().css('background-color','red')){
    $(this).parent().css('background-color','yellow');
  } else ($(this).parent().css('background-color','red'));

} . //toggles to yellow, doesn't seem to toggle back to red

function deleteButton(){

  $(this).parent().remove(); //removes div
}
