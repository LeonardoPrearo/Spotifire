import { Component, OnInit } from '@angular/core';
import {User} from "../../core/model/user";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  user : User ;

  userForm = new FormGroup({
    userName: new FormControl(''),
    userSurname: new FormControl(''),
    cardNumber: new FormControl(''),
    cardExpiration: new FormControl(''),
    cvv: new FormControl(''),
    planType: new FormControl(''),
    planDuration: new FormControl('')
  })

  userToEdit : User;

  constructor() { }

  ngOnInit(): void {
  }


  manageUser(){
    if(!this.userToEdit){
      this.addUser()
    }
    else{
      this.editUser(this.userToEdit)
      this.userForm.reset()
    }
  }

  addUser() {
    this.user = this.userForm.value
    this.userForm.reset()
  }


  editUser($event: User) {
    this.userToEdit = $event
    this.userForm.patchValue(this.userToEdit)
    this.user = {...this.userToEdit}
  }
}
