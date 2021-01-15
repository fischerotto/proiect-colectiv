import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {SkillAreasComponent} from './admin/skill-areas/skill-areas.component';
import {TechnologyAreasComponent} from './admin/technology-areas/technology-areas.component';
import {ProjectsAreaComponent} from './admin/projects-area/projects-area.component';
import {RegionAreasComponent} from './admin/region-areas/region-areas.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin/skill-areas", component: SkillAreasComponent },
  { path: "admin/technology-areas", component: TechnologyAreasComponent },
  { path: "admin/projects-area", component: ProjectsAreaComponent},
  { path: "admin/regions-area", component: RegionAreasComponent},
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "employee",
    loadChildren: () =>
      import("./employee/employee.module").then((m) => m.EmployeeModule),
  },
  {
    path: "supervisor",
    loadChildren: () =>
        import("./supervisor/supervisor.module").then((m) => m.SupervisorModule),
  },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
