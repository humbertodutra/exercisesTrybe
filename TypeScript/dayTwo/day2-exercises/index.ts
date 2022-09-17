import Car from "./car";
import CarColor from "./enums/Color";
import Doors from "./enums/Doors";
import Directions from "./enums/Directions";

const golBolinha = new Car("Volkswagens", CarColor.black, 4);

golBolinha.openTheDoor(Doors.DRIVER);

golBolinha.closeTheDoor(Doors.DRIVER);

golBolinha.turnOn();

golBolinha.speedUp();

golBolinha.speedDown();

golBolinha.turn(Directions.LEFT);

golBolinha.speedUp();

golBolinha.speedDown();

golBolinha.turn(Directions.RIGHT);

golBolinha.speedUp();

golBolinha.speedDown();

golBolinha.turn(Directions.RIGHT);

golBolinha.speedDown();

golBolinha.stop();

golBolinha.openTheDoor(Doors.BEHIND_RIDE);

golBolinha.closeTheDoor(Doors.BEHIND_RIDE);

golBolinha.speedUp();

golBolinha.speedDown();

golBolinha.turn(Directions.RIGHT);

golBolinha.speedUp();

golBolinha.speedDown();

golBolinha.turn(Directions.LEFT);

golBolinha.speedUp();

golBolinha.speedDown();

golBolinha.turn(Directions.RIGHT);

golBolinha.speedDown();

golBolinha.stop();

golBolinha.openTheDoor(Doors.BEHIND_RIDE);

golBolinha.closeTheDoor(Doors.BEHIND_RIDE);

golBolinha.speedUp();
