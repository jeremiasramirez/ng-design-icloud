import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private helper:HelperService) { }

  public onUser() : void{
    this.helper.navigate("/perfil", 600);
  }

  ngOnInit(): void {
  }

}
