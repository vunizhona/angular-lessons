import { Injectable } from '@angular/core';
import {ITask} from "./shared/header/header.interfaces";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _items: ITask[] = [];
  constructor() {
  }

  get headerItems(): ITask[] {
    return this._items;
  }

  set headerItems(newItems: ITask[]) {
    this._items = newItems;
  }

  updateItem(id: number, newName: string){
    const currentItem = this._items.find(item => item.id  === id);

    if(currentItem){
      currentItem.name = newName
    }
  }
}

