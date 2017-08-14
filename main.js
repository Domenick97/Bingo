window.onload = initAll;

function initAll(){
  numbers();
}

/*
Adds random numbers to the cells in the table.
*/
function numbers(){
  var used = [];
  for(var j = 0; j <= 24; j++){
    if(j != 12){
      document.getElementById("cell" + (j+1)).innerHTML = theRandom(j, used);
    }
  }
  used = [];
  for(var j = 0; j <= 24; j++){
    if(j != 12){
      document.getElementById("ocell" + (j+1)).innerHTML = theRandom(j, used);
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


function clickFree(){
  if(document.getElementById("balls").innerHTML == "Click your free space to begin"){
    document.getElementById("balls").innerHTML = "";
    addingBalls();
  }
}

/*
Changes the background color of the space clicked
*/
function clickBgChange(obj){
  if(hasBeenCalled(obj.innerHTML) && obj.style.backgroundColor != "rgb(136, 136, 136)"){
    obj.style.backgroundColor = "#888888";
    alert(obj.style.backgroundColor);
    addingBalls();
  }
}



/*
Changes the background color of the space clicked
*/
function clickO(obj){
  if(hasBeenCalled(obj.innerHTML)){
    obj.style.backgroundColor = "#888888";
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

function addingBalls(){
  window.callTimer = setInterval(addBall, 2200);
}

function addBall(){
  var tempBall = randomBall();
  document.getElementById("balls").innerHTML += "" + tempBall + " ";
  if(playerCardHas(tempBall.substring(1))){
    clearInterval(window.callTimer);
  }
}

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
