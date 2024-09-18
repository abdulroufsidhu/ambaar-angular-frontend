import { Routes } from "@angular/router";
import { AppAuth } from "./auth/auth.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", component: AppAuth },
  { path: "dashboard/", component: DashboardComponent },
];
