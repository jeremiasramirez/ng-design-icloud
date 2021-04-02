import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isClicked : boolean= false;
 
  constructor(private helper:HelperService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void{
    this.isClicked=false;
  }

  public toHome() : void{

    this.isClicked=true;
    this.helper.navigate("/home", 2000);

  }
}
