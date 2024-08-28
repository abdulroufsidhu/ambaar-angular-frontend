import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppInput } from "./theme/input/input.component";
import {
  AppDropdown,
  DropdownOption,
} from "./theme/dropdown/dropdown.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, AppInput, AppDropdown],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ambaar-frontend-angular";
  dropdownoptions: DropdownOption[] = [
    { value: "testvalue1", text: "test text 1" },
    { value: "testvalue2", text: "test text 2" },
    { value: "testvalue3", text: "test text 3" },
    { value: "testvalue4", text: "test text 4" },
    { value: "testvalue5", text: "test text 5" },
  ];
}
