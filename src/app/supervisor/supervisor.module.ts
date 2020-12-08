import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SupervisorRoutingModule } from "./supervisor.router";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SupervisorRoutingModule, MaterialModule, FormsModule],
})
export class SupervisorModule {}
