import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TasksServices } from '../services/tasks.services';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss'],
})
export class SubtitleComponent {

  constructor(private tasksServices: TasksServices) { }

  get countTasks() {
    return this.tasksServices.tasks.length;
  }

}
