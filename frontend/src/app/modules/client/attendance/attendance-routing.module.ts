import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AttendanceListComponent} from './attendance-list.component';


const routes: Routes = [
  {
    path: '',
    component: AttendanceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {
}
