import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { RecipeService } from '../_services/recipe.service';

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.less']
})
export class AddRecipeComponent implements OnInit {
    foodTypes$ = this.recipeService.getFoodTypes();
    unitsOfMeasure$ = this.recipeService.getUnitsOfMeasure();
    user$ = this.accountService.currentUser$.pipe(tap(x => this.user = x));

    orderForm: FormGroup;
    items: FormArray;
    user: User;

    constructor(
        private accountService: AccountService,
        private recipeService: RecipeService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.orderForm = this.formBuilder.group({
            name: '',
            foodTypeId: '',
            instructions: '',
            userId: '',
            ingredients: this.formBuilder.array([this.createItem()])
        });
    }

    createItem(): FormGroup {
        return this.formBuilder.group({
            name: 'zalm',
            unitOfMeasureId: 1,
            amount: '200'
        });
    }

    addItem() {
        this.items = this.orderForm.get('ingredients') as FormArray;
        this.items.push(this.createItem());
    }

    save() {
        this.orderForm.get('userId').setValue(this.user.id);
        this.recipeService.saveRecipe(this.orderForm.value).subscribe((response: any) => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
}
