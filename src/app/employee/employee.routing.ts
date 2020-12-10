import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "edit-profile", component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
