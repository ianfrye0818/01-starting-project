import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selectedUser = new EventEmitter<User>();

  get imagePath() {
    return `assets/users/${this.user?.avatar}`;
  }

  onselectUser = () => {
    this.selectedUser.emit(this.user);
  };
}
