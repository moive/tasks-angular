import { Injectable } from "@angular/core";
import { Task } from '../interfaces/tasks';

@Injectable()
export class TasksServices {
    tasks: Array<Task> = [
        {
            task: "sweep the living room",
            complete: false,
        },
        {
            task: "mop the floor",
            complete: false,
        },
        {
            task: "cook dinner",
            complete: false,
        },
        {
            task: "Read book",
            complete: false,
        },
    ];

    deleteTask(nameTask: string) {
        this.tasks = this.tasks.filter(t => t.task !== nameTask);
    }
}