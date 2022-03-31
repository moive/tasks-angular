import { TasksServices } from "./tasks.services"

describe('TaskServices', () => {
    let service: TasksServices;

    beforeEach(() => {
        service = new TasksServices();
    });

    it("toBe: Should verify that my service starts in 4", () => {
        expect(service.tasks.length).toBe(4);
    });

    it("Delete: Should delete a task sweep the living room", () => {
        service.deleteTask('sweep the living room')
        expect(service.tasks.length).toBe(3);
    });

    it("No Delete: Should not delete a task that does not exist", () => {
        service.deleteTask('abcd');
        expect(service.tasks.length).toBe(4);
    });

    it("Spy: Should call the complete function only once", () => {
        const spy = jasmine.createSpyObj("TasksServices", ['completeTask']);
        spy.completeTask();
        expect(spy.completeTask.calls.count()).toBe(1);
    });
})