import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-technology-areas',
  templateUrl: './technology-areas.component.html',
  styleUrls: ['./technology-areas.component.scss']
})
export class TechnologyAreasComponent implements OnInit {
  isEnabled = false;
  technologies;
  technologyName;
  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {this.getAllTechnologies();}

  getAllTechnologies(){
    
    this.adminService.getAllTechnologies().subscribe(
      (result) => {this.technologies = result;console.log(this.technologies);
      }, (error) => {console.log(error);
      }
    );
  }
  enableAddTechnologyArea() {
    this.isEnabled = true;

  }

  handleSave() {
    this.isEnabled = false;
    this.adminService.addTechnology(this.technologyName).subscribe(
      (result) => { this.getAllTechnologies();this.isEnabled = false;this.technologyName = null;
      }, (error) => {console.log(error);
      }
    );
  }
}
