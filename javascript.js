var color=["green","red","yellow","blue"]
var game=[];
var user=[];
var level=0;
var isStart=false;

//starting game
$(document).on("keypress",function(){
	if(!isStart)
	{
		$("h1").html("Level "+level);
		nextSequence();
		isStart=true;
	}
});

//button Clicks
$(".button").click(function(){
	var text=$(this).attr("id");
	user.push(text);
	$("."+text).addClass("newcolor");//adding animation
	playSound(text);//adding sound
	setTimeout(function(){ //removing animation
	$("."+text).removeClass("newcolor");},500);
	//checking answer
	checkAnswer(user.length-1);
});

	
		
function checkAnswer(currlevel)
{
	if(user[currlevel]===game[currlevel])
	{
		
		if(user.length==game.length)
		{
			setTimeout(function(){
			nextSequence();},1000);
		}
	}
	else 
	{
		playSound("wrong");
		$("h1").html("Game Over! Press Any Key to Play Again");
		resetValues();
	}
}
	
function nextSequence()
{
	level++;
	$("h1").html("Level "+level);
	user=[];
	var num=Math.floor(Math.random()*4)+1;
	var col=color[num-1];
	$("."+col).addClass("newcolor");
	playSound(col);
	setTimeout(function(){
	$("."+col).removeClass("newcolor");},500);
	game.push(color[num-1]);
	
}

function resetValues()
{
	game=[];
	level=0;
	isStart=false;
}

function playSound(sound)
{
	var audio=new Audio("sounds/"+sound+".mp3");
	audio.play();
}