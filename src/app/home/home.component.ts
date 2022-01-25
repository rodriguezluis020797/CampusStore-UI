import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/services/items-service';
import { UserService } from 'src/services/user-service';
import { ItemModel } from '../models/item-model';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemsService]
})
export class HomeComponent implements OnInit {

  constructor(
    private items: ItemsService,
  ) { }

  public itemList: ItemModel[] | undefined;

  ngOnInit(): void {

    this.reload();
    console.log(this.itemList);
    
  }

  reload() : void {
    this.itemList = this.items.getItems();
  }

}
