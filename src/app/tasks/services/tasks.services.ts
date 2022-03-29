import { Injectable } from "@angular/core";

@Injectable()
export class TasksServices {
    tasks: Array<String> = ["sweep the living room", "mop the floor", "cook dinner", "Read book"];

    deleteTask() {
        this.tasks.pop();
    }
}