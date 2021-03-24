import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { IconForStartComponent } from './icon-for-start/icon-for-start.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from '@angular/material/core';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    IconComponent,
    SpinnerComponent,
    IconForStartComponent,
    NavbarComponent,
    
  ],
  imports: [
    MatButtonModule,
    MatRippleModule,
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
    MatRippleModule
  ]
})
export class ComponentsModule { }
