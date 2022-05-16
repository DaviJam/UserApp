import { User } from './../model/user.model';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private UserService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group(
      {
          username : ["",Validators.required],
          email: ["", [Validators.email,Validators.required]],
          password: ["", Validators.required]
      }
    )
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue["username"],
      formValue["email"],
      formValue["password"]
    );
    this.UserService.addUser(newUser);
    this.router.navigate(['/users/list']);
  }
  backToList(){
    this.router.navigate(["users/list"]);
  }
}
