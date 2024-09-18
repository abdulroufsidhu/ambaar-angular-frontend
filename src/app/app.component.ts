import { Component, effect, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppInput } from "./theme/input/input.component";
import { AppDropdown } from "./theme/dropdown/dropdown.component";
import { AppButton } from "./theme/button/button.component";
import { AppAuth } from "./auth/auth.component";
import { SidebarComponent } from "./theme/sidebar/sidebar.component";
import { NavDockComponent } from "./nav-dock/nav-dock.component";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    AppInput,
    AppDropdown,
    AppButton,
    AppAuth,
    SidebarComponent,
    NavDockComponent,
    HttpClientModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ambaar-frontend-angular";
  navExpanded = false;

  navButtons = [
    {
      click: () => {
        console.log("clicked");
      },
      text: "inventory",
      icon: "🧾",
    },
  ];

  constructor() {
    effect(() => {
      console.log("options sigal");
    });
  }
}
