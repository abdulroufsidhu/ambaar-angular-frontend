import { Component, input } from "@angular/core";

export interface DropdownOption {
  value?: string;
  text?: string;
}

@Component({
  imports: [],
  selector: "app-dropdown",
  standalone: true,
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
})
export class AppDropdown {
  options = input<DropdownOption[]>([]);
  active?: DropdownOption = {};
  isOpen? = false;

  constructor() {
    console.log("options are", this.options());
  }
}
