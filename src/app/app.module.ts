import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTING } from './routes/app.routes';
import { PagesModule } from './pages/pages.module';
import { HelperService } from './services/helpers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    ROUTING, 
  ],
  providers: [
    HelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
