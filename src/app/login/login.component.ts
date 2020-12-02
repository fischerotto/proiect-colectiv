import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { EventEmitter } from "protractor";
import { AuthService } from "../core/services/auth.service";
import { CookieService } from "../core/services/cookie.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email;
  password;
  user;
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  submit() {
    this.authService.login(this.email, this.password).subscribe((data) => {
      this.user = data;
      this.cookieService.setCookie("currentUser", JSON.stringify(this.user), 1);
    });
  }
  @Input() error: string | null;
}
