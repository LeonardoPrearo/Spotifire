import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {User} from "../../core/model/user";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user: User ;

  @Input() userToEdit : User;

  @Output() userToAdd : EventEmitter<User> = new EventEmitter<User>();

  userForm = new FormGroup({
    userName: new FormControl(''),
    userSurname: new FormControl(''),
    cardNumber: new FormControl(''),
    cardExpiration: new FormControl(''),
    cvv: new FormControl(''),
    planType: new FormControl(''),
    planDuration: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  outputUser(user: User){
    this.userToAdd.emit(user)
  }

  manageUser(){
    if(!this.userToEdit){
      this.addUser()
    }
    else{
      this.user = this.userToEdit
      this.userForm.patchValue(this.user)

    }
  }

  addUser() {
    this.user = this.userForm.value
    this.userForm.reset()
    this.outputUser(this.user)
  }

  editUser(){



  }


}
