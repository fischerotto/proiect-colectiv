import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class EmployeeProfileService {
  constructor(private http: HttpClient,private authService: AuthService) {}
  getProfilePic(imageName) {
    return this.http.post<any>(
      "http://localhost:8081/employee/get/" + imageName,
      {}
    );
  }

  getTechnologies(){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/employee/get/technology";
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  getSkills(){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/employee/get/skill";
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  getProjects(){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/employee/get/project";
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  getUserData(){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/employee/get/user?email="+user.email;
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

  addSkill(skillId,grade){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/employee/add/skill?userId="+user.id+"&skillId="+skillId+"&grade="+grade;
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.post<any>(
      url,
      {},
      {headers}
    );
  }

  addProject(projectsOfUser, startDate, endDate, role, technologies){
    let user2 = this.authService.currentUser();
    let user = user2.id;
    let url = "http://localhost:8081/employee/add/project";
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user2.accessToken}`
      );
    return this.http.post<any>(
      url,
      {user, projectsOfUser, startDate, endDate, role, technologies},
      {headers}
    );
  }


  verifyAccount(){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/sendmail/verifyAccount?email="+user.email;
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.post<any>(
      url,
      {},
      {headers}
    );
  }

  getUserProjectDetails(){
    let user = this.authService.currentUser();
    let url = "http://localhost:8081/employee/get/userProjects?userId="+user.id;
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.get<any>(
      url,
      {headers}
    );
  }

}
