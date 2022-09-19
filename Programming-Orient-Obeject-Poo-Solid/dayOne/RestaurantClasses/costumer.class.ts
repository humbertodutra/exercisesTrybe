export default class Costumer{
    private _name = String();
    constructor(
        name: string
    ){
        this._name = name
    }

    set name(newName: string){
        this.name = newName;
    }
}

const costumer1 = new Costumer('Hulk');

console.log(costumer1);