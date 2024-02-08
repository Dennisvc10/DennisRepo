import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  template: `<div *ngFor="let item of items">{{item.name}}</div>`,
})
export class AppComponent implements OnInit{
  items: Item[]=[];
  constructor(private dataservice:DataService){}
  ngOnInit(): void {
    this.dataservice.getTransferRequest().subscribe((result: Item[]) => {
this.items=result;
      
    });
  }
  value = 'Dalton';
}
