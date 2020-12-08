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
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
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

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append(
      "imageFile",
      this.selectedFile,
      this.selectedFile.name
    );

    //Make a call to the Spring Boot Application to save the image
    this.httpClient
      .post("http://localhost:8081/employee/upload", uploadImageData, {
        observe: "response",
      })
      .subscribe((response) => {
        if (response.status == 200) {
          this.message = "Image uploaded successfully";
        } else {
          this.message = "Image not uploaded successfully";
        }
      });
  }

  getImage() {
    this.employeeProfileService
      .getProfilePic(this.userLoggedIn.profilePicName)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.profilePic;
        this.retrievedImage = "data:image/jpeg;base64," + this.base64Data;
      });
  }
}
