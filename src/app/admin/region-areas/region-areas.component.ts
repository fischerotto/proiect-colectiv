import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-region-areas',
  templateUrl: './region-areas.component.html',
  styleUrls: ['./region-areas.component.scss']
})
export class RegionAreasComponent implements OnInit {
  isEnabled = false;
  regions;
  regionName;
  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {this.getAllRegions();}

  getAllRegions(){
    
    this.adminService.getAllRegions().subscribe(
      (result) => {this.regions = result;console.log(this.regions);
      }, (error) => {console.log(error);
      }
    );
  }
  enableAddRegionArea() {
    this.isEnabled = true;

  }

  handleSave() {
    this.isEnabled = false;
    this.adminService.addRegion(this.regionName).subscribe(
      (result) => { this.getAllRegions();this.isEnabled = false;this.regionName = null;
      }, (error) => {console.log(error);
      }
    );
  }
}
