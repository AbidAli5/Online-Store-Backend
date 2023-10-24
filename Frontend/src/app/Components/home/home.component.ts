import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodModel } from 'src/app/Shared/Models/FoodModel';
import { FoodService } from 'src/app/Shared/Services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods : FoodModel[]=[];
  constructor(private foodService : FoodService, activatedRout : ActivatedRoute){
    let foodsObservalbe:Observable<FoodModel[]>;
    activatedRout.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
        foodsObservalbe = foodService.getAll();

        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
   
  }
  ngOnInit(){
    
  }

}
