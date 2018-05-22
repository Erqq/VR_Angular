import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DeparturesComponent } from './departures/departures.component';
/**
 * Routes for the departing and arriving trains.
 */
const appRoutes: Routes = [
  { path: 'arrival', component: ArrivalsComponent },
  { path: 'departure', component: DeparturesComponent },
  { path: '', redirectTo: '/departure', pathMatch: 'full' }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
