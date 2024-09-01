import { CommonModule } from "@angular/common";
import {
  Component,
  effect,
  EventEmitter,
  input,
  model,
  signal,
  WritableSignal,
} from "@angular/core";

export interface DropdownOption {
  value?: string;
  text?: string;
}

@Component({
  imports: [CommonModule],
  selector: "app-dropdown",
  standalone: true,
  templateUrl: "./dropdown.component.html",
  styleUrl: "./dropdown.component.scss",
})
export class AppDropdown {
  options = input.required<DropdownOption[]>();
  active = model<DropdownOption>();
  isOpen = true;
  placeholder = input<string>("Dropdown");

  onChange = new EventEmitter<DropdownOption>();

  setActive(newValue: DropdownOption) {
    this.active.set(newValue);
    this.toggleOpen();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
