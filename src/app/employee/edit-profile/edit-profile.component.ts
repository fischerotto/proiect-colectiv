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

  technologies;

  //data
  skills;
  projects;

  //userData
  userSkills;
  userProjects;

  //skillForm;
  newSkillId;
  newSkillGrade;
  
  //projectForm
  newProjectId;
  startDate;
  endDate;
  newRole;
  newTechnologies;

  constructor(
    private httpClient: HttpClient,
    private employeeProfileService: EmployeeProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userLoggedIn = this.authService.currentUser();
    this.getImage();
    this.getAllSkills();
    this.getAllProjects();
    this.getUserData();
    this.getUserProjectDetails();
    this.getAllTechnologies();
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
          if(res){
            this.retrievedImage = "data:image/jpeg;base64," + res.profilePic;
          }else{
            this.retrievedImage = "assets/profile.png";
          }
        },
        (error) => {
          this.retrievedImage = "assets/profile.png";
        }
      );
  }

  getAllSkills(){
    this.employeeProfileService.getSkills().subscribe(
      (data)=>{
        this.skills = data;
        console.log(this.skills);
      }
    );
  }

  getAllProjects(){
    this.employeeProfileService.getProjects().subscribe(
      (data)=>{
        this.projects = data;
        console.log(this.projects);
      }
    );
  }

  getUserData(){
    this.employeeProfileService.getUserData().subscribe(
      (data)=>{
        console.log(data);
        this.userSkills = data.userSkills;
      }
    )
  }

  addNewSkill(){
    this.employeeProfileService.addSkill(this.newSkillId,this.newSkillGrade).subscribe((data)=>{
      console.log(data);
      this.newSkillId = null;
      this.newSkillGrade = null;
      this.getUserData();
    });
  }
  
  addNewProject(){
    this.employeeProfileService.addProject(this.newProjectId,this.startDate, this.endDate, this.newRole, this.newTechnologies.join()).subscribe((data)=>{
      this.newProjectId = null;
      this.startDate = null;
      this.endDate = null;
      this.newRole = null;
      this.newTechnologies = null;
      this.getUserProjectDetails();
    });
  }

  verifyAccount(){
    this.employeeProfileService.verifyAccount().subscribe((data)=>{
      console.log(data);
    });
  }

  getUserProjectDetails(){
    this.employeeProfileService.getUserProjectDetails().subscribe((data)=>{
      this.userProjects = data;
    });
  }

  getAllTechnologies(){
   this.employeeProfileService.getTechnologies().subscribe((data)=>{
     this.technologies = data;
   })
  }
}
