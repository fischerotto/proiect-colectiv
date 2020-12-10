import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin.routing";
import { MaterialModule } from "../material/material.module";
import { SkillAreasComponent } from './skill-areas/skill-areas.component';
import { TechnologyAreasComponent } from './technology-areas/technology-areas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, SkillAreasComponent, TechnologyAreasComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, FormsModule],
})
export class AdminModule {}
