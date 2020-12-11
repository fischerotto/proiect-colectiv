import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from "./cookie.service";


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  user;
  constructor( private http:HttpClient, private authService: AuthService) {
   }
   public getAllTechnologies(){
    let user = this.authService.currentUser();
    
    let url = "http://localhost:8081/administrator/get/technology";
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.get<any>(
      url,
      {headers}
    );
  }
  public addTechnology(technology){
    let user = this.authService.currentUser();
    
    let url = "http://localhost:8081/administrator/add/technology";
    var headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${user.accessToken}`
      );
    return this.http.post<any>(
      url,
      {technology},
      {headers}
    );
  }

    getProjects(token: string) {
        return this.http.get<any>('http://localhost:8081/administrator/get', {
            observe: 'response',
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            })
        });
    }

    addProject(project, token) {
        return this.http.post<any>(
            "http://localhost:8081/administrator/addProject",
            project,
            {
                observe: "response",
                headers: new HttpHeaders({
                    'Authorization': `Bearer ${token}`
                })
            }
        );
    }
}
