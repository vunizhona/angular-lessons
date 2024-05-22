import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITask} from './header.interfaces';
import {HeaderService} from "../../header.service";

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{

  items: ITask[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  constructor(public headerService: HeaderService) {
  }

  ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

  trackByItemId(index: number, item: any): number {
    return item.id; // Return the unique identifier for the item
  }

  updateHeaderItems() {
    this.headerService.headerItems = this.items;

    console.log(this.headerService.headerItems)
  }

  ngOnInit(): void {
    console.log("On Init")
  }


}
