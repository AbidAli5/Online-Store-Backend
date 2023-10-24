import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodModel } from '../Models/FoodModel';
import { Sample_Food, sample_tags } from 'src/data';
import { Tags } from '../Models/Tags';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../Constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<FoodModel[]> {
    return this.http.get<FoodModel[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<FoodModel[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<FoodModel[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<FoodModel[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId:string):Observable<FoodModel>{
    return this.http.get<FoodModel>(FOOD_BY_ID_URL + foodId);
  }
}
