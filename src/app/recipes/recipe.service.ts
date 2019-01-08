import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Lemon merengue', 
      'The best pie', 
      "https://www.crazyforcrust.com/wp-content/uploads/2017/03/Lemon-Meringue-Pie-1-of-3.jpg",
      [new Ingredient('lemons', 5), new Ingredient('cream', 2)]
      ),
    new Recipe(
      'Lemon merengue 2', 
      'The best pie sequel', 
      "https://www.crazyforcrust.com/wp-content/uploads/2017/03/Lemon-Meringue-Pie-1-of-3.jpg",
      [new Ingredient('lemons', 25), new Ingredient('cream', 3), new Ingredient('sugar', 4)]
      )
  ];

  getRecipes(){
    return this.recipes.slice()
  }
}
