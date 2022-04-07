let userInputCharX = 5;
let userInputCharY = 7;

let userInputNonCharX = 6;
let userInputNonCharY = 2;

let userInputCharXY = {
    x: 5,
    y: 7
};

let userInputNonCharXY = {
    x: 6,
    y: 2
};

if (userInputCharX > 10 || userInputCharY > 10 || userInputCharXY.x > 10 || userInputCharXY.y > 10 ||
    userInputNonCharXY.x > 10 || userInputNonCharXY.y > 10) {
    console.error("Wrong input");
};

class Character {
    constructor(x, y, coordinates) {

        if (new.target === Character) {
            throw new Error("Can't be instantiated")
        }
        
        this.x = x,
        this.y = y,
        this.coordinates = coordinates;

    }

    set setXCoordinatePlayer(x) {
        this.x = x;
    }

    get getXCoordinatePlayer() {
        return this.x;
    }

    set setYCoordinatePlayer(y) {
        this.y = y;
    }

    get getYCoordinatePlayer() {
        return this.y;
    }

    set setCoordinates(coordinates) {
        this.coordinates = coordinates
    }

    get getCoordinates() {
        return this.coordinates
    }
}

class PlayerCharacter extends Character {
    constructor(x, y, coordinates) {
        super(x, y, coordinates)
    }

}

class NonPlayerCharacter extends Character {
    constructor(x, y, coordinates) {
        super(x, y, coordinates)
    }

}

const playerChar1 = new PlayerCharacter(userInputCharX, userInputCharY, userInputCharXY);
const nonPlayerChar1 = new NonPlayerCharacter(userInputNonCharX, userInputNonCharY, userInputNonCharXY);

console.log(`Coordinate for point X of Player Character is: ${playerChar1.getXCoordinatePlayer}`);
console.log(`Coordinate for point Y od Player Character is: ${playerChar1.getYCoordinatePlayer}`);
console.log(`Coordinates for Player Character are: ${playerChar1.getCoordinates.x} and ${playerChar1.getCoordinates.y}`);

console.log(`Coordinate for point X of Non Player Character is: ${nonPlayerChar1.getXCoordinatePlayer}`);
console.log(`Coordinate for point Y od Non Player Character is: ${nonPlayerChar1.getYCoordinatePlayer}`);
console.log(`Coordinates for Non Player Character are: ${nonPlayerChar1.getCoordinates.x} and ${nonPlayerChar1.getCoordinates.y}`);
