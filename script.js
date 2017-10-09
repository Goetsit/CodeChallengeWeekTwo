
$(document).ready(readyNow);

function readyNow(){
  console.log('js');
  $('#generate').on('click', codeChallenge);
  $('.swap').on('click','.codeChall', colors);
}

function codeChallenge() {


  console.log('code challenge');
  $('body').append('<div class = "codeChall"></div>');
  //TODO ADD COUNTER

  var count = $(this).data("count") || 0;
           $(this).data("count", ++count);

$('.codeChall').append(count);

  newButtons();

}

function newButtons(){

  $('.codeChall').append('<button type="button" id = "swap">SWAP</button>'); //append swamp button
  $('.codeChall').append('<button type="button" class = "deleteBtn">DELETE</button>'); //append delete button

}

function colors(){
  console.log('literally want to die');

}
