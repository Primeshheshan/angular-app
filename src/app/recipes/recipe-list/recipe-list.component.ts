import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected = new EventEmitter<RecipeModel>();
  recipes!: RecipeModel[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipe();
  }

}
