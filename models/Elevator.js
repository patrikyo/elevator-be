class Elevator {
  constructor(name, currentFloor, destination, direction, id) {
    this.name = name;
    this.currentFloor = currentFloor;
    this.destination = destination;
    this.direction = direction;
    this.id = id;
  }
}

module.exports = Elevator;
