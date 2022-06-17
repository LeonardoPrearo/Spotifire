import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../core/model/user";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() user: User
  @Output() userToEdit : EventEmitter<User> = new EventEmitter<User>();
  @Output() userToDelete : EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  editUser(user: User) {
    this.userToEdit.emit(user)
  }

  deleteUser(user: User) {
    this.userToDelete.emit(user)
  }
}
