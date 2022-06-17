import {Component, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../core/model/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  user : User ;

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    userSurname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    cardNumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern("^[0-9]*$")])),
    cardExpiration: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])),
    cvv: new FormControl('', Validators.compose([Validators.required , Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(3)])),
    planType: new FormControl('', Validators.compose([Validators.required])),
    planDuration: new FormControl('', Validators.compose([Validators.required]))
  })

  userToEdit : User;

  constructor() { }

  ngOnInit(): void {
  }

  manageUser(){

    if(!this.user){
      this.addUser()
    }
    else{
      this.addUser()
    }
    this.userForm.reset()
  }

  addUser() {
    this.user = this.userForm.value
  }


  editUser($event: User) {
    this.userToEdit = $event
    this.userForm.patchValue(this.userToEdit)
  }

  deleteUser($event: User) {
    this.user = $event
    this.user.userName = undefined
  }
}
