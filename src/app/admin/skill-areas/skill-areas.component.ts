import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/core/services/admin.service";

@Component({
  selector: "app-skill-areas",
  templateUrl: "./skill-areas.component.html",
  styleUrls: ["./skill-areas.component.scss"],
})
export class SkillAreasComponent implements OnInit {
  isEnabled = false;
  skills;
  skillName;
  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {this.getAllSkills();}

  getAllSkills(){
    
    this.adminService.getAllSkills().subscribe(
      (result) => {this.skills = result;console.log(this.skills);
      }, (error) => {console.log(error);
      }
    );
  }
  enableAddSkillArea() {
    this.isEnabled = true;

  }

  handleSave() {
    this.isEnabled = false;
    this.adminService.addSkill(this.skillName).subscribe(
      (result) => { this.getAllSkills();this.isEnabled = false;this.skillName = null;
      }, (error) => {console.log(error);
      }
    );
  }
}
