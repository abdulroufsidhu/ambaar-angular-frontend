import { Component } from "@angular/core";
import { NavDockComponent } from "../nav-dock/nav-dock.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [NavDockComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {}
