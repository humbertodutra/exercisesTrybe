import Costumer from "./costumer.class";
import ItemOrdered from "./orderedItem.class";
import Order from "./order.class";

const costumer = new Costumer('Don Diego Tardelli');

const filetMignon = new ItemOrdered('FiletMignon', 43);
const juice = new ItemOrdered('Strawberry Juice', 12);
const dessert = new ItemOrdered('Petit Gateu', 35);

const newOrder = new Order(costumer, [filetMignon, juice, dessert], 'creditCard', 10)

console.log(newOrder);