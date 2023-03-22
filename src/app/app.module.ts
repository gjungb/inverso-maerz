import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { BASE_URL } from './di';
import { LedListComponent } from './led-list/led-list.component';
import { LedComponent } from './led/led.component';
import { InvColorPipe } from './shared/inv-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    InvColorPipe,
    ColorFormComponent,
    DetailComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: BASE_URL,
      useValue:
        'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
