import { Component, OnInit, Input } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { EventEmitter } from "protractor";
import { AuthService } from "../core/services/auth.service";
import { CookieService } from "../core/services/cookie.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email;
  password;
  user;
  registerMessage = '';
  hide = true;
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
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
    this.authService.login(this.email, this.password).subscribe((data) => {
      console.log(data);
      this.user = data.body;
      this.cookieService.setCookie("currentUser", JSON.stringify(this.user), 1);
      if (this.user.role === "ADMINISTRATOR")
        this.router.navigateByUrl("/admin");
      else if (this.user.role === "EMPLOYEE")
        this.router.navigateByUrl("/employee");
      else if (this.user.role === "SUPERVISOR")
        this.router.navigateByUrl("/supervisor");
    } ,(error) => {
      console.log(error)
      this.registerMessage = "There was a problem with the login. Check your login credentials!";
    });
  }
  @Input() error: string | null;

  closeMessage() {
    this.registerMessage ='';
  }
}
