var printDescription = function (theText){
  var node = document.getElementById('description');
  var newNode = document.createElement('p');
  newNode.appendChild(document.createTextNode(theText));
  node.appendChild(newNode);
};

var printOptions = function (someText){
  var node = document.getElementById('options');
  var newNode = document.createElement('p');
  newNode.appendChild(document.createTextNode(someText));
  node.appendChild(newNode);
};

printOptions("Leo");

//create room objects
function room(roomnumber,north,west,east,south){
  this.roomnumber=roomnumber;
  this.north=north;
  this.east=east;
  this.south=south;
  this.west=west;
}


var room1=new room(1,6,0,2,0);
var room2=new room(2,7,1,3,0);
var room3=new room(3,8,2,4,0);
var room4=new room(4,0,3,5,0);
var room5=new room(5,10,4,0,0);
var room6=new room(6,0,0,7,1);
var room7=new room(7,12,6,0,2);
var room8=new room(8,13,0,9,3);
var room9=new room(9,14,8,10,0);
var room10=new room(10,15,9,0,5);
var room11=new room(11,16,0,12,0);
var room12=new room(12,0,11,0,7);
var room13=new room(13,0,0,14,8);
var room14=new room(14,0,13,0,9);
var room15=new room(15,20,0,0,10);
var room16=new room(16,21,0,0,11);
var room17=new room(17,22,0,18,0);
var room18=new room(18,0,17,19,0);
var room19=new room(19,24,18,20,0);
var room20=new room(20,0,19,0,15);
var room21=new room(21,0,0,0,16);
var room22=new room(22,99,0,23,17);
var room23=new room(23,0,22,0,0);
var room24=new room(24,0,0,25,19);
var room25=new room(25,0,24,0,0);

var state = 0;
var room = 1;

//checks what's going on in the game
var checkState = function(option,room){
  var check = this.option;
  if (check === 0){
    state = 2;
  } else if (check === 99){
    state = 3;
  } else {
    state = 1;
    room = check;
  }
  return state;
};

//states:
//0 = beginning
//1 = valid direction, move to new room
//2 = hit a wall
//3 = win!




var describe = function(){

  printDescription("Rain");

};

//options:
//north
//west
//east
//south

var playerOptions = function(){

  printOptions("Option 1: Go north");


};

var GameLoop = function(){
  checkState(option,room);
  describe();
  playerOptions();
};

GameLoop();

