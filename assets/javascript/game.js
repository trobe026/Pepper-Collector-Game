// random score and pepper numbers
var randomNum = 19 + Math.floor(Math.random() * 101);
var score = 0;
var randomPepNum1 = 1 + Math.floor(Math.random() * 12);
var randomPepNum2 = 1 + Math.floor(Math.random() * 12);
var randomPepNum3 = 1 + Math.floor(Math.random() * 12);
var randomPepNum4 = 1 + Math.floor(Math.random() * 12);
// win || loss alerts and stored function
var loss = ["Ew, that's terrible Salsa! You Lose!", "Gross Salsa! You Lose!", "Bah! Disgusting Salsa! You Lose!"];
var win = ["That's some spicy salsa! You Win!", "Mmmmmmm! You Win!", "This is the World's Greatest Salsa! You Win!"]
var randNum = Math.floor(Math.random() * loss.length);
var randLoss = loss[randNum];
var randWin = win[randNum];
function ending() {
  if (score > randomNum) {
    $('#score').html("<h2>" + randLoss + "</h2>");
  }
  if (score === randomNum) {
    $('#score').html("<h2>" + randWin + "</h2>");
  }
}

$( window ).on( "load", function() {
        $('#score').html("Peppers Collected: " + score + ".");
        $('#random').html("Peppers Required: " + randomNum + ".");

        // click functions per pepper: Bell Pepper

        $('#bellPep').on("click", function() {
          score = score + randomPepNum1;
          $('#score').html("Peppers Collected: " + score + ".");
          if (randomPepNum1 === 1) {
            $('#pepNum1').html("<p>" + randomPepNum1 + " Bell Pepper</p>").show();
          }
          else {
            $('#pepNum1').html("<p>" + randomPepNum1 + " Bell Peppers</p>").show();
          }
          ending();
        });

        // click functions per pepper: jalapeno

        $('#jalapeno').on("click", function() {
          score = score + randomPepNum2;
          $('#score').html("Peppers Collected: " + score + ".");
          if (randomPepNum2 === 1) {
            $('#pepNum2').html("<p>" + randomPepNum2 + " Jalape&ntilde;o</p>").show();
          }
          else {
            $('#pepNum2').html("<p>" + randomPepNum2 + " Jalape&ntilde;os</p>").show();
          }
          ending();
        });

        // click functions per pepper: serrano

        $('#serrano').on("click", function() {
          score = score + randomPepNum3;
          $('#score').html("Peppers Collected: " + score + ".");
          if (randomPepNum3 === 1) {
            $('#pepNum3').html("<p>" + randomPepNum3 + " Serrano</p>").show();
          }
          else {
            $('#pepNum3').html("<p>" + randomPepNum3 + " Serranos</p>").show();
          }
          ending();
        });

        // click functions per pepper: habanero

        $('#habanero').on("click", function() {
          score = score + randomPepNum4;
          $('#score').html("Peppers Collected: " + score + ".");
          if (randomPepNum4 === 1) {
            $('#pepNum4').html("<p>" + randomPepNum4 + " Habanero</p>").show();
          }
          else {
            $('#pepNum4').html("<p>" + randomPepNum4 + " Habaneros</p>").show();
          }
          ending();
        });

        // reset function

        $('#reset').on("click", function() {
          randomNum = 19 + Math.floor(Math.random() * 101);
          score = 0
          randomPepNum1 = 1 + Math.floor(Math.random() * 12);
          randomPepNum2 = 1 + Math.floor(Math.random() * 12);
          randomPepNum3 = 1 + Math.floor(Math.random() * 12);
          randomPepNum4 = 1 + Math.floor(Math.random() * 12);
          $('#score').html("Peppers Collected: " + score + ".");
          $('#random').html("Peppers Required: " + randomNum + ".");
          $('#pepNum1,#pepNum2,#pepNum3,#pepNum4').hide();
        });

    });
