import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn:'root'})

export class DataStorageService {
   constructor (private htttp: HttpClient, private recipeService: RecipeService) {

   
   }

   storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.htttp.put('https://ng-recipe-book-c108d.firebaseio.com/recipes.json', recipes).subscribe(response => {
        console.log(response);
    });
 }

 fetchRecipes() {
     this.htttp.get<Recipe[]>('https://ng-recipe-book-c108d.firebaseio.com/recipes.json').subscribe(recipes => {
        this.recipeService.setRecipes(recipes)
     }
     )
 }

}