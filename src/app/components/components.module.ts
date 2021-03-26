import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { IconForStartComponent } from './icon-for-start/icon-for-start.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoComponent } from './user-info/user-info.component';
import { ItemAppComponent } from './item-app/item-app.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
 
@NgModule({
  declarations: [
    IconComponent,
    SpinnerComponent,
    IconForStartComponent,
    NavbarComponent,
    UserInfoComponent,
    ItemAppComponent,
    NavbarLeftComponent,
    
  ],
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    IconComponent,
    SpinnerComponent,
    IconForStartComponent,
    BrowserAnimationsModule,
    NavbarComponent,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    ItemAppComponent,
    UserInfoComponent,
    NavbarLeftComponent,
  ]
})
export class ComponentsModule { }
