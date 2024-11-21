import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { Task } from './task.model';
import { User } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  tasks: Task[] = [];
  selectedUserId?: string;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onUserChange(userId: string): void {
    this.selectedUserId = userId;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.taskService.saveTasks(this.tasks);
  }

  toggleTaskComplete(index: number): void {
    this.tasks[index].complete = !this.tasks[index].complete;
    this.taskService.saveTasks(this.tasks);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.taskService.saveTasks(this.tasks);
  }
}
