import { Component, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service.ts'
import {Ingredient} from '../../shared/ingredient.model'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe;
  constructor(private slService: ShoppingListService) { }

  addToShoppingList(){
    this.slService.addIngredients(this.recipe.ingredients)
  }
}
