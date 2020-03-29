import { Component, OnInit } from '@angular/core';

import { TasksService } from "../tasks.service";
import { Task } from "../task";
import { Tasks } from "../tasks";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Tasks;
  filtered: Tasks;
  
  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(
      tasks => this.setRetrievedTasks(tasks),
      error => this.handleError(error)
    );
  }

  setRetrievedTasks(tasks) : void {
    this.tasks = tasks;
    this.filtered = this.tasks;
  }

  showAll(): void {
    this.filtered = this.tasks;
  }

  showOnlyComplete(): void {
    this.filtered = this.tasks.filter(item => item.completed);
  }

  showOnlyPending(): void {
    this.filtered = this.tasks.filter(item => !item.completed);
  }

  remove(id: string): void {
    this.tasksService.deleteTask(id).subscribe(
      () => this.tasksService.getTasks().subscribe(
        tasks => this.setRetrievedTasks(tasks),
        error => this.handleError(error)
      ),
      error => this.handleError(error)
    );
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;

    this.tasksService.updateTask(task).subscribe(
      () => this.tasksService.getTasks().subscribe(
        tasks => this.setRetrievedTasks(tasks),
        error => this.handleError(error)
      ),
      error => this.handleError(error)
    );
  }

  handleError(error): void {
    console.log(error);
  }

}
