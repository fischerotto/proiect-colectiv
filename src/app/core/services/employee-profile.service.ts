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

  addProject(projectId){

    let user = this.authService.currentUser();
    
    let url = "http://localhost:8081/employee/add/project?userId="+user.id+"&projectId="+projectId;
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

}
