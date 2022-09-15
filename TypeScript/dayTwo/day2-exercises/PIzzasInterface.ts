// ./PizzaCommon.ts

import Pizza from "./Pizza";
import { Comomon, Special, Suggar } from "./PizzaFlavorsTypes";

interface PizzaCommon extends Pizza {
  flavor: Comomon
}

interface PizzaSpecial extends Pizza {
    flavor: Special
}

interface PizzaSuggar extends Pizza {
    flavor: Suggar
}

export {
    PizzaCommon,
    PizzaSpecial,
    PizzaSuggar,
}