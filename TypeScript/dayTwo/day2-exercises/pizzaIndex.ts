import Pizza from "./Pizza";
import {PizzaCommon, PizzaSpecial, PizzaSuggar } from "./PIzzasInterface"

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const frangoCatupiry: PizzaSpecial = {
  flavor: "Frango c/ Catupiry",
  slices: 6
}

console.log(frangoCatupiry);


const nutela: PizzaSuggar = {
  flavor: "Nutella",
  slices: 4
}

console.log(nutela);

const a = [calabresa, frangoCatupiry, nutela];

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {

  const newArray: Array<T> = [];


  for (let i = 0; i < array.length; i++) {

    if (callback(array[i], i, array)) {

      newArray.push(array[i]);

    }

  }


  return newArray;

}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));
console.log(myFilter(["a", "b", "c"], (item, index, array) => 

  item !== "a"

));