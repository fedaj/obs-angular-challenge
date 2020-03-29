import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from "./task-list/task-list.component";
import { TaskEditComponent } from "./task-edit/task-edit.component";

const routes: Routes = [
  { path: "task-list", component: TaskListComponent },
  { path: "task-create", component: TaskEditComponent },
  { path: "task-edit/:id", component: TaskEditComponent },
  { path: "", redirectTo: "/task-list", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
