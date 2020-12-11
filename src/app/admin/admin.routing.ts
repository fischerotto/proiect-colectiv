import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SkillAreasComponent } from "./skill-areas/skill-areas.component";
import {ProjectsAreaComponent} from './projects-area/projects-area.component';
import { TechnologyAreasComponent } from './technology-areas/technology-areas.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "skill-areas", component: SkillAreasComponent },
  { path: "technology-areas", component: TechnologyAreasComponent },
  { path: "projects-area", component: ProjectsAreaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
