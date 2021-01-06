import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaterialModule } from "../material/material.module";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { EmployeeRoutingModule } from "./employee.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent, EditProfileComponent],
  imports: [CommonModule, EmployeeRoutingModule,FormsModule, MaterialModule ],
})
export class EmployeeModule {}
