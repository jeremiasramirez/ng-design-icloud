import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';
 
@Component({
  selector: 'apps-page-root',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.css']
})
export class AppsPage {
  public dataToApp = null;

  constructor(private helper:HelperService){

  }
  ngOnInit():void{
    this.dataToApp = this.helper.getApps();
  }
 
}
