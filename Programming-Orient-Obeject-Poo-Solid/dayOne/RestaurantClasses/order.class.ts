import Costumer from "./costumer.class";
import ItemOrdered from "./orderedItem.class";

export default class Order {
    private _costumer: Costumer;
    private _items: ItemOrdered[] = [];
    private _paymentMethod: string;
    private _discount = 0;

    constructor(
        costumer: Costumer,
        items: ItemOrdered[],
        paymentMethod: string,
        discount: number,
    ){
      
        this._costumer = costumer;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount; 

    }

    get costumer(): Costumer{
        return this._costumer;
    }

    set costumer(value: Costumer){
        this._costumer = value;
    }

    get items(): ItemOrdered[]{
        return this._items
    }

    set items(value: ItemOrdered[]){
        this._items = value;
    }

    get paymentMethod(): string {
        return this._paymentMethod;
    }

    set paymentMethod(value: string) {
       this._paymentMethod = value;
    }
    
    get discount(): number {
      return this._discount;
    }
    
    set discount(value: number) {
       this._discount = value;
    
      }

    calculateTotal(): number{
        return this.items
            .reduce((prevValue, item) => {
                const total = prevValue + item.price
                return total
            }, 0);
    }

    calculateTotalWithDiscout():number{
       const total = this.calculateTotal();
       const discount = this.discount
       const totalDiscount =  (total/100) * discount
       const totalWithDiscount = total - totalDiscount;
       return totalWithDiscount;
    }
}

