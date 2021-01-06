import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SkillAreasComponent } from "./skill-areas/skill-areas.component";
import {ProjectsAreaComponent} from './projects-area/projects-area.component';
import { TechnologyAreasComponent } from './technology-areas/technology-areas.component';
import { RegionAreasComponent } from "./region-areas/region-areas.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "skill-areas", component: SkillAreasComponent },
  { path: "technology-areas", component: TechnologyAreasComponent },
  { path: "projects-area", component: ProjectsAreaComponent},
  { path: "regions-area", component: RegionAreasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
