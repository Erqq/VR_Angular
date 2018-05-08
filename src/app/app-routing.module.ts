import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DeparturesComponent } from './departures/departures.component';

const appRoutes: Routes = [
  { path: 'arrivals', component: ArrivalsComponent },
  { path: 'departures', component: DeparturesComponent },
  { path: '', redirectTo: '/arrivals', pathMatch: 'full' }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
