import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EmployeeProfileService {
  constructor(private http: HttpClient) {}
  getProfilePic(imageName) {
    return this.http.post<any>(
      "http://localhost:8081/employee/get/" + imageName,
      {}
    );
  }
}
