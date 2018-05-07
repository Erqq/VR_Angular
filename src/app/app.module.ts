import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrainsService } from './trains.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DeparturesComponent } from './departures/departures.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ArrivalsComponent, DeparturesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TrainsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
