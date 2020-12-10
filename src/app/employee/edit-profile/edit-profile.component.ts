import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { EmployeeProfileService } from "src/app/core/services/employee-profile.service";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  message: string;
  userLoggedIn;
  constructor(
    private httpClient: HttpClient,
    private employeeProfileService: EmployeeProfileService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.userLoggedIn = this.authService.currentUser();
    this.getImage();
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append(
      "imageFile",
      this.selectedFile,
      this.selectedFile.name
    );
    this.httpClient
      .post("http://localhost:8081/employee/upload", uploadImageData, {
        observe: "response",
      })
      .subscribe((response) => {
        if (response.status == 200) {
          this.message = "Image uploaded successfully";
          this.userLoggedIn.profilePicName = null;
          this.authService.setUser(this.userLoggedIn);
        } else {
          this.message = "Image not uploaded successfully";
        }
      });
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
