
export class FoodModel{
    id ! : number;
    name ! : String;
    price ! : number;
    tags ? : string[];
    favorite! : boolean;
    stars!: number;
    imageUrl !: string;
    cookTime !: string;
    origins !:string[];
    description ! : string;
}