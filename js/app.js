
$(document).ready(function(){

  var gameNum = undefined;
  var newGuesses = 0;


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});


  /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  /*--- Start New Game ---*/
  	$(".new").on("click", newGame);


  /*--- Guess Button ---*/
  	$(".button").on("click", userFeedback);


  /*--- New Game Function ---*/

  	function newGame(){
      newGuesses = 0;
      $("#count").html("0");
      $("#feedback").html("Make your Guess!");
  		$("#guessList").empty();
  		gameNum = ranNumber();
      console.log(gameNum);
      return gameNum;
  	};


  /*--- Random Number Function ---*/

  	function ranNumber(){

  		var x = Math.floor((Math.random() * 101) + 1);
  		console.log(x);
  		return x;
  	};


  /*--- User Feedback Function ---*/

  	function userFeedback(){
       var $guess = $("#userGuess").val();
       var guess = $guess;
        $("#userGuess").val('');
        newGuesses++;
       
        Number(guess);
        //console.log(guess);
        //console.log(gameNum);

         $("#count").html(newGuesses);
         $("ul.guessBox").append('<li class = "guessBox">' + guess + '</li>');


        if ( guess > 100){
          $("#feedback").html("Choose a number less than 100");

        }
        else if ( guess < 1){
          $("#feedback").html("Choose a number greater than 1");

        }
        else if (guess == gameNum){ 
          $("#feedback").html("You Got It!");
        }
        else if ( Math.abs(guess - gameNum) <= 10){ 
          console.log("Very Hot!");
          $("#feedback").html("Very Hot!");
        }
        else if ( Math.abs(guess - gameNum) <= 25){ 
          console.log("Warm");
          $("#feedback").html("Warm");

        }
        else if ( Math.abs(guess - gameNum) <= 35){ 
          console.log("Cold");
          $("#feedback").html("Cold");

        }  
        else if ( Math.abs(guess - gameNum) <= 45){ 
          console.log("Very Cold");
          $("#feedback").html("Very Cold");

        } 
        else {
          console.log("Ice Cold!");
          $("#feedback").html("Ice Cold!");

        }
    };
newGame();    
});

/*
$(".button").on("click", function(){
    var i = 0;
    $("#count").html(i++);
};
*/

  /* count as a var attempt
  var count = $("#count").html();
        for (count = var i = 0; i < 1000; i++){
          $("#count").html(count);
        }
  */  

/*
    $(".button").on("click", function(event){
      var i = 0;
      var target = $(event.target);
      for (i = 0; i < target; i++){
        $("#count").html(++i);
      }
      });
*/

/*
var i = 0;
        var x = (guess/guess) / ;

        for (var i = 0; i < (guess / guess) + 1; i++){
        $("#count").html(i);
        }

*/

  