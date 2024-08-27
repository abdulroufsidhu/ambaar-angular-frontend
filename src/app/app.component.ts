import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppInput } from "./theme/input/input.component";
import { AppDropdown } from "./theme/dropdown/dropdown.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, AppInput, AppDropdown],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ambaar-frontend-angular";
}
