import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { EmployeeProfileService } from "src/app/core/services/employee-profile.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  userLoggedIn;
  retrievedImage;
  constructor(
    private authService: AuthService,
    private employeeProfileService: EmployeeProfileService
  ) {}

  ngOnInit(): void {
    this.userLoggedIn = this.authService.currentUser();
    this.getImage();
  }

  getImage() {
    this.employeeProfileService
      .getProfilePic(this.userLoggedIn.profilePicName)
      .subscribe(
        (res) => {
          this.retrievedImage = "data:image/jpeg;base64," + res.profilePic;
        },
        (error) => {
          this.retrievedImage = "assets/profile.png";
        }
      );
  }
}
