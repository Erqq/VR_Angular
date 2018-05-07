import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparturesComponent } from '../departures/departures.component';

const mySubRoutes: Routes = [
  { path: 'departures', component: DeparturesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(mySubRoutes)],
  exports: [RouterModule]
})
export class DeparturesRoutingModule {}
