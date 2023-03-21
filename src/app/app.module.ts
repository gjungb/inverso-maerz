import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { InvColorPipe } from './shared/inv-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    InvColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
