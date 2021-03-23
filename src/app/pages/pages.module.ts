import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPage } from './start/start.page';



@NgModule({

  declarations: [
    StartPage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StartPage
  ]
})
export class PagesModule { }
