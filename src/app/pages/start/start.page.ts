import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-perfil-root',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.css']
})
export class StartPage {
  title = 'page';

  constructor(private helper:HelperService){
    this.helper.navigate("/login", 3000);
  }

 
}
