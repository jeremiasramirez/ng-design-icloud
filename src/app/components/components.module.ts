import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { IconForStartComponent } from './icon-for-start/icon-for-start.component';



@NgModule({
  declarations: [
    IconComponent,
    SpinnerComponent,
    IconForStartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconComponent,
    SpinnerComponent,
    IconForStartComponent
  ]
})
export class ComponentsModule { }
