import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPage } from './start/start.page';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';



@NgModule({

  declarations: [
    StartPage,
    HomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule,
    StartPage,
    HomePage
  ]
})
export class PagesModule { }
