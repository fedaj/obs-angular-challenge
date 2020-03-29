import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  ValidatorFn
} from "@angular/forms";

import { Tasks } from "../tasks";
import { Task } from "../task";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  isEditing = false;
  task = new Task();
  taskForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.route.snapshot.paramMap.has("id")) {
      let taskId = this.route.snapshot.paramMap.get("id");
      this.isEditing = true;
      this.getTaskData(taskId);
    }
  }

  initForm() {
    this.taskForm = this.formBuilder.group({
      description: [this.task.description, [Validators.required, Validators.minLength(4), Validators.maxLength(2000)]],
      completed: [this.task.completed]
    });
  }

  getTaskData(id) {
    this.tasksService.getTasks().subscribe(
      tasks => {
        this.task = tasks.find(task => task._id == id);
        this.taskForm.patchValue({
          description: this.task.description,
          completed: this.task.completed,
        });
      },
      error => this.handleError(error)
    );
  }

  handleError(error): void {
    console.log(error);
  }

  createTask(task: Task) {
    this.tasksService.createTask(this.task).subscribe(
      () => this.router.navigate(['task-list']),
      error => this.handleError(error)
    );
}
  
updateTask(task: Task) {
  this.tasksService.updateTask(this.task).subscribe(
    () => this.router.navigate(['task-list']),
    error => this.handleError(error)
  );
}

send(): void {
    if (this.taskForm.valid) {
      this.task.description = this.taskForm.get("description").value;
      this.task.completed = this.taskForm.get("completed").value;
      if (this.isEditing) {
        this.updateTask(this.task);
      } else {
        this.createTask(this.task);
      }
    }
  }

}
