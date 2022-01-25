import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItemModel } from "src/app/models/item-model";

@Injectable()

export class ItemsService {
    readonly devUrl: string = "https://localhost:5001";
    readonly prodUrl: string = "https://campus-store-api.azurewebsites.net";

    constructor(
        private http: HttpClient
    ) {
        
    }

    public items: ItemModel[] = [];
    public item1: ItemModel = new ItemModel();
    public item2: ItemModel = new ItemModel();
    public item3: ItemModel = new ItemModel();
    public item4: ItemModel = new ItemModel();
    public item5: ItemModel = new ItemModel();

    public getItems(){
        this.item1.itemId = 1; this.item1.userId = 1; this.item1.name = "Item 1"; this.item1.price = 0.99; this.item1.description ="Item 1 description";
        this.item2.itemId = 2; this.item2.userId = 2; this.item2.name = "Item 2"; this.item2.price = 1.99; this.item2.description ="Item 2 description";
        this.item3.itemId = 3; this.item3.userId = 3; this.item3.name = "Item 3"; this.item3.price = 2.99; this.item3.description ="Item 3 description";
        this.item4.itemId = 4; this.item4.userId = 4; this.item4.name = "Item 4"; this.item4.price = 3.99; this.item4.description ="Item 4 description";
        this.item5.itemId = 5; this.item5.userId = 4; this.item5.name = "Item 5"; this.item5.price = 4.99; this.item5.description ="Item 5 description";

        this.items.push(this.item1, this.item2, this.item3, this.item4, this.item5);

        return this.items;
    }



}