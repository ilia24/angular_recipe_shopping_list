import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Lemon merengue', 'The best pie', "https://www.crazyforcrust.com/wp-content/uploads/2017/03/Lemon-Meringue-Pie-1-of-3.jpg"),
    new Recipe('Lemon merengue 2', 'The best pie sequel', "https://www.crazyforcrust.com/wp-content/uploads/2017/03/Lemon-Meringue-Pie-1-of-3.jpg")
  ];

  getRecipes(){
    return this.recipes.slice()
  }
}
