
// Javascript Loading Test
// alert("connected");



// // Jquery loading test
//  $(document).ready(function(){
//              if (jQuery) {  
//                // jQuery is loaded  
//                alert("Yeah!");
//              } else {
//                // jQuery is not loaded
//                alert("Doesn't Work");
//              }
//           });
var winScore = 0;
var youScore = 0;
// Wins and Losses Counter
var win = 0;
var loss = 0;
// Crystal Value Variables
var red = 0;
var blue = 0;
var green = 0;
var white = 0;
// Function for Random Number Generator 
function randomNum(x,y){
	var res = Math.floor(Math.random() * ((y-x)+1)+x);
	return res;
}
// Generating Win Score Dynamically
function winNumber(){
		winScore = randomNum(27,72);
		console.log("Win Score is "+winScore);
		$("#WinScore").text(winScore);
}
// Generating Crystal Values Dynamically
function crystalVaue(){

		red = randomNum(1,3);
		console.log("red value is "+red);

		blue = randomNum(4,6);
		console.log("blue value is "+blue);

		green = randomNum(7,9);
		console.log("green value is "+green);

		white = randomNum(10,12);
		console.log("white value is "+white);
}
//Connecting Crystals 
$(document).ready(function(){
	$("#blue").on("click", function(){
		// alert("Blue connected");
		youScore+=blue;
		console.log("You Score updating as "+youScore);
		$("#YouScore").text(youScore);
		winOrLoss();	
	});

	$("#red").on("click", function(){
		// alert("Red connected");
		youScore+=red;
		console.log("You Score updating as "+youScore);
		$("#YouScore").text(youScore);
		winOrLoss();
	});

	$("#green").on("click", function(){
		// alert("Green connected");
		youScore+=green;
		console.log("You Score updating as "+youScore);
		$("#YouScore").text(youScore);
		winOrLoss();

	});

	$("#white").on("click", function(){
		// alert("Yellow connected");
		youScore+=white;
		console.log("You Score updating as "+youScore);
		$("#YouScore").text(youScore);
		winOrLoss();
	});

});
// GAme Mode Function
function gameMode(){
					//Assignig Values								
								winNumber();
								crystalVaue();
								console.log("IIII"+youScore);							
				}

gameMode();
	// Win and Loose Logic Function
function winOrLoss(){	
	if ((youScore !== winScore) && (youScore < winScore)) {
		console.log("Keep playing Dear");
		} else if (youScore === winScore) {
		console.log("You are a winner");
		win+=1;
		console.log("Wins"+win);
		$("#YouScore").text("0");
		$("#winC").text(win);
		reset();
		gameMode();
	} else if(youScore > winScore) {
		console.log("You Loose");
		console.log("Game Over");
		loss+=1;
		console.log("loss"+loss);
		$("#lossC").text(loss);
		$("#YouScore").text("");
		reset();
		gameMode();
	}
}
// Reset Function for fresh Game
function reset(){
	winScore = 0;
    youScore = 0;
}