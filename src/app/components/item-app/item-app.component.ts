import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-app',
  templateUrl: './item-app.component.html',
  styleUrls: ['./item-app.component.css']
})
export class ItemAppComponent implements OnInit {

  @Input() dataTapApp = new Array();


  constructor() { }

  ngOnInit(): void { 
    console.log(this.dataTapApp)
  }

}
