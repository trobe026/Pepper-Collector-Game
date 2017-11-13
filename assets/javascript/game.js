var randomNum = 19 + Math.floor(Math.random() * 101);
var score = 0;
var randomPepNum = '';



$( window ).on( "load", function() {
        console.log( "window loaded" );
        $('#score').html("Peppers Collected: " + score + ".");
        $('#random').html("Peppers Needed: " + randomNum + ".");
        $('img').html("randomPepNum");
    });

for(i = 0;i < 4;i++) {

}

function bellpep() {
  console.log("test1");
  randomPepNum = 1 + Math.floor(Math.random() * 12);
  score = score + randomPepNum;
  $('#score').html("Peppers Collected: " + score + ".");
  $('#pepNum1').html("<p>" + randomPepNum + "</p>");
  console.log(score);
}

function jalapeno() {
  console.log("test2");
  score = score + randomPepNum;
  $('#score').html("Peppers Collected: " + score + ".");
  $('#pepNum2').text(randomPepNum);
  console.log(score);
}

function serrano() {
  console.log("test3");
  score = score + randomPepNum;
  $('#score').html("Peppers Collected: " + score + ".");
  $('#pepNum3').text(randomPepNum);
  console.log(score);
}

function habanero() {
  console.log("test4");
  score = score + randomPepNum;
  $('#score').html("Peppers Collected: " + score + ".");
  $('#pepNum4').text(randomPepNum);
  console.log(score);
}
