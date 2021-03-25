import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-app',
  templateUrl: './item-app.component.html',
  styleUrls: ['./item-app.component.css']
})
export class ItemAppComponent  {

  @Input() dataTapApp = null;

  constructor() { }

   
}
