enum Direction { 
    Up,
    Down,
    Left,
    Right   
}

function move(direction: Direction) {
    switch(direction) {
        case Direction.Up:
            console.log("Moving Up");
            break;  
        case Direction.Down:
            console.log("Moving Down");
            break;  
        case Direction.Left:
            console.log("Moving Left");
            break;  
        case Direction.Right:
            console.log("Moving Right");
            break;  
    }   
}

move(Direction.Up);
move(Direction.Left);   