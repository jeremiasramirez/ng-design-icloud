import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
 
export class IconComponent implements OnInit {
  @Input() route:string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
