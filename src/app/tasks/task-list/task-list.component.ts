import { Component, OnInit } from '@angular/core';
import { TasksServices } from '../services/tasks.services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  constructor(private tasksServices: TasksServices) { }

  get tasks() {
    return this.tasksServices.tasks;
  }

  delete() {
    this.tasksServices.deleteTask();
  }

}
