import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-login-root',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {
   

  constructor(private helper:HelperService){  }


 
}
