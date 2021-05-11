import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userInfor = {
    userName: 'Phucng',
    password: 'password',
    rememberMe: true
  };

  userNamePattern = /^[a-z]{6,32}$/i;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }

}
