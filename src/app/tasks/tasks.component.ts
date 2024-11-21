import { Component, Input } from '@angular/core';
import { dummyTasks, Task } from '../dummyTasks';
import { User } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() user?: User;
  usersTasks: Task[] = [];

  ngOnChanges(): void {
    if (this.user) {
      this.usersTasks = dummyTasks.filter(
        (task) => task.userId === this.user?.id
      );
    }
  }
}
