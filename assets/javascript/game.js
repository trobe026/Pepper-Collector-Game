var randomNum = 19 + Math.floor(Math.random() * 101);
var score = 0;
var randomPepNum1 = 1 + Math.floor(Math.random() * 12);
var randomPepNum2 = 1 + Math.floor(Math.random() * 12);
var randomPepNum3 = 1 + Math.floor(Math.random() * 12);
var randomPepNum4 = 1 + Math.floor(Math.random() * 12);

$( window ).on( "load", function() {
        console.log( "window loaded" );
        $('#score').html("Peppers Collected: " + score + ".");
        $('#random').html("Peppers Needed: " + randomNum + ".");
    });

$('button').on("click", function () {
  if (score == randomNum) {
    console.log('test')
    $('p').text("You Win!");
  }

});

function bellpep() {
  console.log("test1");
  score = score + randomPepNum1;
  $('#score').html("Peppers Collected: " + score + ".");
  if (randomPepNum1 === 1) {
    $('#pepNum1').html("<p>" + randomPepNum1 + " Bell Pepper</p>").show();
  }
  else {
    $('#pepNum1').html("<p>" + randomPepNum1 + " Bell Peppers</p>").show();
  }
  console.log(score);
}

function jalapeno() {
  console.log("test2");
  score = score + randomPepNum2;
  $('#score').html("Peppers Collected: " + score + ".");
  if (randomPepNum2 === 1) {
    $('#pepNum2').html("<p>" + randomPepNum2 + " Jalape&ntilde;o</p>").show();
  }
  else {
    $('#pepNum2').html("<p>" + randomPepNum2 + " Jalape&ntilde;os</p>").show();
  }
  console.log(score);
}

function serrano() {
  console.log("test3");
  score = score + randomPepNum3;
  $('#score').html("Peppers Collected: " + score + ".");
  if (randomPepNum3 === 1) {
    $('#pepNum3').html("<p>" + randomPepNum3 + " Serrano</p>").show();
  }
  else {
    $('#pepNum3').html("<p>" + randomPepNum3 + " Serranos</p>").show();
  }
  console.log(score);
}

function habanero() {
  console.log("test4");
  score = score + randomPepNum4;
  $('#score').html("Peppers Collected: " + score + ".");
  if (randomPepNum4 === 1) {
    $('#pepNum4').html("<p>" + randomPepNum4 + " Habanero</p>").show();
  }
  else {
    $('#pepNum4').html("<p>" + randomPepNum4 + " Habaneros</p>").show();
  }
  console.log(score);
}

function reset() {
  console.log(score);
  randomNum = 19 + Math.floor(Math.random() * 101);
  score = 0
  randomPepNum1 = 1 + Math.floor(Math.random() * 12);
  randomPepNum2 = 1 + Math.floor(Math.random() * 12);
  randomPepNum3 = 1 + Math.floor(Math.random() * 12);
  randomPepNum4 = 1 + Math.floor(Math.random() * 12);
  $('#score').html("Peppers Collected: " + score + ".");
  $('#random').html("Peppers Needed: " + randomNum + ".");
  $('#pepNum1,#pepNum2,#pepNum3,#pepNum4').hide();
}
