import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-for-start',
  templateUrl: './icon-for-start.component.html',
  styleUrls: ['./icon-for-start.component.css']
})
export class IconForStartComponent implements OnInit {
  @Input() route = ""; 
  constructor() { }

  ngOnInit(): void {
  }

}
