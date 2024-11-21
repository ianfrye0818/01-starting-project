import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS, User } from '../dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() selectedUser = new EventEmitter<User>();
  // selectedUser = output<User>();0

  get imagePath() {
    return `assets/users/${this.user?.avatar}`;
  }

  onselectUser = () => {
    this.selectedUser.emit(this.user);
  };
}
