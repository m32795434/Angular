import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about.component';
import { TasksComponent } from './components/tasks/tasks.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent }, {
    path: 'taskComp', component: TasksComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
