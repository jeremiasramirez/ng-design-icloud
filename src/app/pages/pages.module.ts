import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPage } from './start/start.page';
import { HomePage } from './home/home.page';
import { ComponentsModule } from '../components/components.module';
import { SettingPage } from './setting/setting.page';
import { AppsPage } from './apps/apps.page';
import { PerfilPage } from './perfil/perfil.page';



@NgModule({

  declarations: [
    StartPage,
    HomePage,
    SettingPage,
    AppsPage,
    PerfilPage 
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
    AppsPage,
    PerfilPage 
  ]
})
export class PagesModule { }
