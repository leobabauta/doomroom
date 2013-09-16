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


var roomList = [
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
];

var state = 0;
var room = roomList[0];

//checks what's going on in the game
var checkState = function(option,room){
  var check = this.option;
  if (check === 0){
    state = 2;
  } else if (check === 99){
    state = 3;
  } else if (state === 0){
    return;
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
  if (state === 0) {
    printDescription("Beginning description");
    state++;
  } else if (state === 1) {
    printDescription("Describe new room");
  } else if (state === 2) {
    printDescription("You hit a wall! Ouch.");
  } else if (state === 3) {
    printDescription("You win! Congratulations!");
  }
  return;
};

//options:
//north
//west
//east
//south

var playerOptions = function(){

  printOptions("1: Go north | 2: Go South | 3: Goe East | 4: Go West");
  var getPlayerMovement = prompt("Which direction would you like to go?");
  var playerMovement = 0;
  if (getplayerMovement === "1") {
    room = roomList[room.north - 1];
  }
  else if (getPlayerMovement === "2") {
    room = roomList[room.south - 1];
    state = 1;
  }
  else if (getPlayerMovement === "3") {
    room = roomList[room.east - 1];
    state = 1;
  }
  else if (getPlayerMovement === "4") {
    room = roomList[room.west - 1];
    state = 1;
  }
  else {
    state = 2;
  }
}

var GameLoop = function(){
  checkState(option,room);
  describe();
  playerOptions();
};

GameLoop();

