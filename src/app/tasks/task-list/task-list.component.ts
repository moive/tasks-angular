import { Component, OnInit } from '@angular/core';
import { TasksServices } from '../services/tasks.services';
import { Task } from '../interfaces/tasks';

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

  delete(task: Task) {
    this.tasksServices.deleteTask(task.task);
  }

}
