import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    baseUrl = 'https://localhost:5001/api/';

    constructor(private http: HttpClient) { }

    getFoodTypes() {
        return this.http.get(`${this.baseUrl}foodtype/all`);
    }

    getUnitsOfMeasure() {
        return this.http.get(`${this.baseUrl}unitsofmeasure/all`);
    }

    saveRecipe(model: any) {
        return this.http.post(`${this.baseUrl}recipe/add`, model)
    }

    getRecipe(id: number) {
        return this.http.get(`${this.baseUrl}recipe/get/${id}`);
    }
}
