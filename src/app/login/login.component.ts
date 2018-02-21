import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../provider/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:FormGroup;

  constructor(public form: FormBuilder, public loginSer: LoginService ) {
      this.login = this.form.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit() { }

  makelogin() {
    this.loginSer.login().subscribe(res => {
      console.log(res);
    })
  }  

}
