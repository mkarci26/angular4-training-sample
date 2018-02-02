import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form.builder.html',
  styleUrls: ['./login-form.component.css']
})
export class FormBuilderComponent {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  
  password = new FormControl('', [Validators.required]);
  
  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor (private builder: FormBuilder) { }

  login() {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }
  
  ngOnInit(){
	  this.username.value = "onload";
  }
}