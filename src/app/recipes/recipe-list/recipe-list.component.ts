import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lemon merengue', 'The best pie', "https://www.crazyforcrust.com/wp-content/uploads/2017/03/Lemon-Meringue-Pie-1-of-3.jpg"),
    new Recipe('Lemon merengue 2', 'The best pie sequel', "https://www.crazyforcrust.com/wp-content/uploads/2017/03/Lemon-Meringue-Pie-1-of-3.jpg")

  ];


  constructor() { }

  ngOnInit() {
  }

}
