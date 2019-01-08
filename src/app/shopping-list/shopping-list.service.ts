import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Tomatoes', 120)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.getIngredients())
  }

}
