import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {CookieService} from '../core/services/cookie.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  role;
  email;
  password;
  user;
  hide = true;
  registerMessage = '';
  typeMessage = '';
  constructor(
      private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('[a-zA-Z0-9\\.]+@[a-zA-Z\\.]+\\.[a-zA-Z]+'),
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  submit() {
    this.authService.register(this.email, this.password, this.role).subscribe((data) => {
      console.log(data);
      this.registerMessage = "Registered with success! You can login now";
      this.typeMessage = "accepted";
    },(error) => {
      console.log(error)
      this.registerMessage = "A problem occurred while trying to register. Please try again later!";
      this.typeMessage = "warning";
    });
  }
  @Input() error: string | null;

  closeMessage() {
    this.registerMessage ='';
  }
}
