import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Task } from "./task";
import { Tasks } from "./tasks";

import { environment } from "../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":  "application/json",
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl = environment.apiUrl;
  ownerId = 27;
  
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tasks> {
    let url = this.apiUrl + this.ownerId;

    return this.http.get<Tasks>(url);
  }

  createTask(task: Task): Observable<Task> {
    let url = this.apiUrl + this.ownerId;
    let patch = {
      description: task.description,
      completed: task.completed
    };
    
    return this.http.post<Task>(url, patch, httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    let url = this.apiUrl + task._id;
    let patch = {
      description: task.description,
      completed: task.completed
    };
    
    return this.http.patch<Task>(url, patch, httpOptions);
  }

  deleteTask(id: string): Observable<Task> {
    let url = this.apiUrl + id;
    
    return this.http.delete<Task>(url);
  }
}
