const Elevator = require("../models/Elevator");

let elevators = [
  new Elevator("A", 1, null, "idle", 1),
  new Elevator("B", 1, null, "idle", 2),
  new Elevator("C", 1, null, "idle", 3),
  new Elevator("D", 1, null, "idle", 4),
  new Elevator("E", 1, null, "idle", 5),
];

function updateElevators(req, res) {
  const { id } = req.body;

  elevators = elevators.map((elevator) => {
    if (id === elevator.id) {
      return {
        ...elevator,
        destination: null,
        currentFloor: elevator.destination,
        direction: "idle",
      };
    } else {
      return elevator;
    }
  });
  res.json(elevators);
}

function requestElevator(req, res) {
  const { requestedFloor } = req.body;
  const selectedElevator = chooseElevator(requestedFloor, elevators);
  const direction = getDirection(elevators[selectedElevator], requestedFloor);
  if (selectedElevator !== -1) {
    elevators[selectedElevator] = {
      ...elevators[selectedElevator],
      destination: requestedFloor,
      direction: direction,
    };
    res.json(elevators[selectedElevator]);
  } else {
    res.json({ error: "Ingen tillgänglig hiss" });
  }
}

function chooseElevator(requestedFloor, elevators) {
  let closestElevatorIndex = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;

  elevators.forEach((elevator, index) => {
    const distance = Math.abs(elevator.currentFloor - requestedFloor);
    if (distance < minDistance) {
      minDistance = distance;
      closestElevatorIndex = index;
    }
  });
  return closestElevatorIndex;
}

function getDirection(elevator, requestedFloor) {
  if (elevator.currentFloor < requestedFloor) {
    return "up";
  } else if (elevator.currentFloor > requestedFloor) {
    return "down";
  }
}

module.exports = {
  updateElevators,
  requestElevator,
};
