
$(document).ready(readyNow);

function readyNow(){
  console.log('js');
  $('#generate').on('click', codeChallenge);
  $('.codeChall').on('click','button', colors);
}

function codeChallenge() {


  console.log('code challenge');
  $('body').append('<div class = "codeChall"></div>');
  ///counts up

  newButtons();
  counter();


}

function counter(){

  var count = $(this).data("count") || 0;
  $(this).data("count", ++count);

  $('.codeChall').parent().append('<h2>'+count+'</h2>');

}

function newButtons(){
  $('.codeChall').empty(); //getting duplicates, empty() works to prevent that
  $('.codeChall').append('<button type="button" class = "swap">SWAP</button>'); //append swamp button
  $('.codeChall').append('<button type="button" class = "deleteBtn">DELETE</button>'); //append delete button



}

function colors(){
  console.log('why wwill these buttons not work');

}
