import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { 

  }

  ngOnInit() {

  }

  onLogin(form: UserI){
    this.authService.loginByEmail(form).then(
      res => {
        console.log('Succesfully', res);
        this.router.navigate(['/']);
      }).catch(error => console.log('Error', error));
  }

}
