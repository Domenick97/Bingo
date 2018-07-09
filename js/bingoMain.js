window.onload = initAll;

function initAll(){
  numbers();
  //setupCells();
}

function setupCells(){



  for( var i = 5; i < document.getElementsByTagName('table').length; i++ ){
    for(var head = 0; head < 5; head++){
      document.getElementsByTagName('td')[head].innerHTML = "Test";
    }


  }
  /*
  for( var i = 5; i < document.getElementsByTagName('td').length; i++ ){
    document.getElementsByTagName('td')[i].innerHTML = "Test";
  }*/
}

/*
Adds random numbers to the cells in the table.
*/
function numbers(){
  var used = [];
  for(var j = 0; j <= 24; j++){
    if(j != 12){
      var cell = document.getElementById("cell" + (j+1));
      cell.val = theRandom(j, used);
      cell.innerHTML = cell.val;
      cell.dot = false;
    }
  }
  used = [];
  for(var j = 0; j <= 24; j++){
    if(j != 12){
      var cell = document.getElementById("ocell" + (j+1));
      cell.val = theRandom(j, used);
      cell.innerHTML = cell.val;
      cell.dot = false;
    }
  }
}

/*
Creats a random number between 1-15, 16-30, 31-45, 46-60, and 61-75
*/
function theRandom(cell, used) {
  var unique = false;
  var num = 0;

  while(!unique){
    num = Math.floor(Math.random() * 15) + 1 + (cell % 5 * 15);
    if(!contains(num, used)){
      unique = true;
    }
  }
  used[used.length] = num;
  return num;
}

/*
Checks to see if the array contians the provided element.
*/
function contains(num, used){
  if(used.length == 0){
    return false;
  }
   for(var k = 0; k < used.length; k++){
     if(used[k] == num){
       return true;
     }
    }
    return false;
}

/*
Changes the background color of the space clicked
*/
function clickCell(obj){
  var banner = document.getElementById("balls").innerHTML;
  if(hasBeenCalled(obj.innerHTML) && obj.style.backgroundColor != "rgb(136, 136, 136)" || banner == "Click your free space to begin" && obj.innerHTML == "Free"){
    if(banner == "Click your free space to begin" && obj.innerHTML == "Free"){
      document.getElementById("balls").innerHTML = "";
    }
    obj.style.backgroundColor = "#888888";
    window.callTimer = setInterval(addingBalls, 2000);
  }
}

/*
Returns true if the space clicked on has been called, else returns false
*/
function hasBeenCalled(num){
  var balls = calledBalls();

  for(var k = 0; k < balls.length; k++){
    if(num == balls[k].substring(1)){
      return true;
    }
  }
  return false;
}

/*
Returns an array of the balls called
*/
function calledBalls(){
  var balls = [];
  var stringBalls = document.getElementById("balls").innerHTML;
  var tempBall = "";
  for(var j = 0; j < stringBalls.length; j++){
    if(stringBalls.charAt(j) == " "){
      balls[balls.length] = tempBall;
      tempBall = "";
    } else {
      tempBall += stringBalls.charAt(j);
    }
  }
  return balls;
}

/*
Adds balls with a set interval between each
*/
function addingBalls(){
  addBall();
  var ball = calledBalls();
  if(playerCardHas(ball[ball.length -1].substring(1)) || winner("cell") || winner("ocell")){
    clearInterval(window.callTimer);
    if(winner("cell")){
      if(winner("ocell")){
        alert("It's A Tie!");
        if(confirm("Would you like to play again?")){
          location.reload();
        }
      } else {
        alert("You Won!");
        if(confirm("Would you like to play again?")){
          location.reload();
        }
      }
    } else {
      if(winner("ocell")){
        alert("Computer Won!");
        if(confirm("Would you like to play again?")){
          location.reload();
        }
      }
    }
  }
}

/*
Calls a ball stopping the timer if it is found in the players card or if the player or computer win.
*/
function addBall(){
  var tempBall = randomBall();
  runOppCard(tempBall.substring(1));
  document.getElementById("balls").innerHTML += "" + tempBall + " ";
}

/*
Returns true if the players card has the ball that was called
*/
function playerCardHas(ball){
  for(var t = 1; t <= 25; t++){
    if(t != 13){
      if(document.getElementById("cell" + t).innerHTML == ball){
        return true;
      }
    }
  }
  return false;
}

/*
If the computers card has the ball it fills in the space
*/
function runOppCard(ball){
  for(var t = 1; t <= 25; t++){
    if(t != 13){
      if(document.getElementById("ocell" + t).innerHTML == ball){
        document.getElementById("ocell" + t).style.backgroundColor = "#888888";
      }
    }
  }
}

/*
Picks a random ball that has not already been called, letter and number combined.
*/
function randomBall(){
  var called = false;
  while(!called){
    var num = Math.floor(Math.random() * 75) + 1;
    if(!hasBeenCalled(num)){
      called = true;
    }
  }
  if(num <= 15){
    return "B" + num;
  } else {
    if(num <= 30){
      return "I" + num;
    } else {
      if(num <= 45){
        return "N" + num;
      } else {
        if(num <= 60){
          return "G" + num;
        } else {
          return "O" + num;
        }
      }
    }
  }
}

/*
Determines if the card pased through won
*/
function winner(name){
  var spaceHasBeenCalled = [25];
  for(var k = 0; k <=24; k++){
    if(k != 12){
      if(document.getElementById(name + (k + 1)).style.backgroundColor == "rgb(136, 136, 136)"){
        spaceHasBeenCalled[k] = true;
      } else {
        spaceHasBeenCalled[k] = false;
      }
    }
  }
  //Horizontal
  if(spaceHasBeenCalled[0] && spaceHasBeenCalled[1] && spaceHasBeenCalled[2] && spaceHasBeenCalled[3] && spaceHasBeenCalled[4]){
    return true;
  }
  if(spaceHasBeenCalled[5] && spaceHasBeenCalled[6] && spaceHasBeenCalled[7] && spaceHasBeenCalled[8] && spaceHasBeenCalled[9]){
    return true;
  }
  if(spaceHasBeenCalled[10] && spaceHasBeenCalled[11] && spaceHasBeenCalled[13] && spaceHasBeenCalled[14]){
    return true;
  }
  if(spaceHasBeenCalled[15] && spaceHasBeenCalled[16] && spaceHasBeenCalled[17] && spaceHasBeenCalled[18] && spaceHasBeenCalled[19]){
    return true;
  }
  if(spaceHasBeenCalled[20] && spaceHasBeenCalled[21] && spaceHasBeenCalled[22] && spaceHasBeenCalled[23] && spaceHasBeenCalled[24]){
    return true;
  }
  //Vertical
  if(spaceHasBeenCalled[0] && spaceHasBeenCalled[5] && spaceHasBeenCalled[10] && spaceHasBeenCalled[15] && spaceHasBeenCalled[20]){
    return true;
  }
  if(spaceHasBeenCalled[1] && spaceHasBeenCalled[6] && spaceHasBeenCalled[11] && spaceHasBeenCalled[16] && spaceHasBeenCalled[21]){
    return true;
  }
  if(spaceHasBeenCalled[2] && spaceHasBeenCalled[7] && spaceHasBeenCalled[17] && spaceHasBeenCalled[22]){
    return true;
  }
  if(spaceHasBeenCalled[3] && spaceHasBeenCalled[8] && spaceHasBeenCalled[13] && spaceHasBeenCalled[18] && spaceHasBeenCalled[23]){
    return true;
  }
  if(spaceHasBeenCalled[4] && spaceHasBeenCalled[9] && spaceHasBeenCalled[14] && spaceHasBeenCalled[19] && spaceHasBeenCalled[24]){
    return true;
  }
  //Diagonal
  if(spaceHasBeenCalled[0] && spaceHasBeenCalled[6] && spaceHasBeenCalled[18] && spaceHasBeenCalled[24]){
    return true;
  }
  if(spaceHasBeenCalled[4] && spaceHasBeenCalled[8] && spaceHasBeenCalled[16] && spaceHasBeenCalled[20]){
    return true;
  }
  return false;
}
