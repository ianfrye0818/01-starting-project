import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { UserComponent } from './features/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './features/tasks/tasks.component';
import { User } from './features/user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(user: User) {
    this.selectedUser = user;
  }
}
