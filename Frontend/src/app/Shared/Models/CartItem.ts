import { FoodModel } from "./FoodModel";

export class CartItem{
  constructor(public food:FoodModel){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}
