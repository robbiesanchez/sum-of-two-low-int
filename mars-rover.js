const rover = {
  direction: "N",
  x:0,
  y:0,
  travellog: (["",""])
}

function turnLeft(theRover, order){
  switch(theRover.direction) {
    case "N":
      theRover.direction = "W";
      break;
    case "W":
      theRover.direction = "S";
      break;
    case "S":
      theRover.direction = "E";
      break;
    case "E":
      theRover.direction = "N";
      break;
  }
  console.log("Turn left was called!");
}


function turnRight(theRover, order){
  switch(theRover.direction) {
    case "N":
      theRover.direction = "E";
      break;
    case "E":
      theRover.direction = "S";
      break;
    case "S":
      theRover.direction = "W";
      break;
    case "W":
      theRover.direction = "N";
      break;
  }  
  console.log("Turn right was called!");
}



function moveForward(theRover){
  switch(theRover.direction) {
    case "N":
      theRover.y++;
      break;
    case "W":
      theRover.x--;
      break;
    case "S":
      theRover.y--;
      break;
    case "E": 
      theRover.x++;
      break;
  }
  console.log("Move forward was called!");
  if (theRover.x < -5 || theRover.x > 5 || theRover.y < -5 || theRover.y > 5) {
    console.log("Your rover has gone off the map!")
  } else {
   console.log(`The position of the rover is x: ${theRover.x} and y: ${theRover.y}`) 
  }
}

function moveBackwards(theRover){
  switch(theRover.direction) {
    case "N":
      theRover.y--;
      break;
    case "W":
      theRover.x++;
      break;
    case "S":
      theRover.y++;
      break;
    case "E": 
      theRover.x--;
      break;
  }
  console.log("Move backwards was called!");
  if (theRover.x < -5 || theRover.x > 5 || theRover.y < -5 || theRover.y > 5) {
    console.log("Your rover has gone off the map!")
  } else {
   console.log(`The position of the rover is x: ${theRover.x} and y: ${theRover.y}`) 
  }
}

function roverCommands(theRover, orders){
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order) {
      case "r":
        turnRight(theRover);
        break;
      case "l":
        turnLeft(theRover);
        break;
      case "f":
        moveForward(theRover);
        break;
      case "b":
        moveBackwards(theRover);
        break;
      default:
        console.log("Not a valid command!");
    }
    let location = ([theRover.x, theRover.y]);
    theRover.travellog.push(location);
  }
  console.log(theRover.travellog);
}

roverCommands(rover, "rffrfflfrbblrbbakadn");
