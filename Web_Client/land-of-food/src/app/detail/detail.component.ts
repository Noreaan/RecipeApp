import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../_services/recipe.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
    recipe$: Observable<Object>;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) { }

    ngOnInit(): void {
        this.getRecipe();
    }


    getRecipe(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.recipe$ = this.recipeService.getRecipe(id);
    }
}
