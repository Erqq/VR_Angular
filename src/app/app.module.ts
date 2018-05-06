import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrainsService } from './trains.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TrainsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
