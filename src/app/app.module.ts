import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormBuilder } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
