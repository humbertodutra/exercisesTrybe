import CarColor from "./enums/Color";
import Directions from "./enums/Directions";
import Doors from "./enums/Doors";

class Car {
    brand: string
    color: CarColor
    doors: number

    constructor(brand: string, color: CarColor, doors: number){

        this.brand = brand;
        this.color = color;
        this.doors = doors
    }

    honk(): void {
        console.log('Fooom')
    }

    openTheDoor(door: Doors): void{
        console.log(`Abrindo a porta ${door}`)
    }

    closeTheDoor(door: Doors): void{
        console.log(`Fechando a porta ${door}`)
    }

    turnOn(): void {

        console.log("Carro ligado.");    
    }

    turnOff(): void {
    
        console.log("Carro desligado.");
    
    }

    speedUp(): void {

        console.log("Acelerando o carro.");
    
    }
    
    speedDown(): void {
    
        console.log("Reduzindo a velocidade do carro.");
    }
    
    stop(): void {

        console.log("Parando o carro.");
    
      }

    turn(direction: Directions): void {

       console.log(`Virando para a ${direction}.`);
    
    }  
}

export default Car;