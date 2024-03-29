import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: IngredientModel[];

  constructor(private shppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shppingListService.getIngredients();
    this.shppingListService.ingredientChanged.subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients =ingredients;
      }
    );
  }

}
