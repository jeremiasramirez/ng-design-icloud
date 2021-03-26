import { Component } from '@angular/core';
import { HelperService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.css']
})
export class PerfilPage {
  title = 'page';

  constructor(private helper:HelperService){ }

 
}
