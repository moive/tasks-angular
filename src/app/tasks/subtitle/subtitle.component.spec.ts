import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksServices } from '../services/tasks.services';

import { SubtitleComponent } from './subtitle.component';

describe('SubtitleComponent', () => {
  let component: SubtitleComponent;
  let fixture: ComponentFixture<SubtitleComponent>;

  let service: TasksServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtitleComponent],
      providers: [TasksServices]
    }).compileComponents();

    service = TestBed.inject(TasksServices);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should render 4 elements", () => {
    service.deleteTask("sweep the living room");
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const tasks = render.querySelector(".is-link")?.textContent?.trim();

    expect(tasks).toEqual("Number of tasks: 3");
  });

  it("Should render message THERE ARE NOT TASKS IN THE LIST", () => {
    service.deleteTask("sweep the living room");
    service.deleteTask("mop the floor");
    service.deleteTask("cook dinner");
    service.deleteTask("Read book");

    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const task = render.querySelector(".is-danger")!.textContent!.trim();

    expect(task).toEqual("THERE ARE NOT TASKS IN THE LIST");
  });
});
