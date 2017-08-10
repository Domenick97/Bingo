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
