import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  setTaskComplete(): void {
    this.task.complete = true;
  }
  setTaskIncomplete(): void {
    this.task.complete = false;
  }
}
