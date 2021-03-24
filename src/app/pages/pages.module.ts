import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPage } from './start/start.page';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';
import { SettingPage } from './setting/setting.page';
import { AppsPage } from './apps/apps.page';



@NgModule({

  declarations: [
    StartPage,
    HomePage,
    SettingPage,
    AppsPage
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule,
    StartPage,
    HomePage,
    SettingPage,
    AppsPage
  ]
})
export class PagesModule { }
