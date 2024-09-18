import { Component, model } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppButton } from "../theme/button/button.component";

export interface NavButton {
  text: string;
  icon: string;
  click: () => void;
}

@Component({
  selector: "app-nav-dock",
  standalone: true,
  imports: [AppButton, CommonModule],
  templateUrl: "./nav-dock.component.html",
  styleUrl: "./nav-dock.component.scss",
})
export class NavDockComponent {
  expanded = model(false);
  buttons = model<NavButton[]>([]);
  activeButton = model(this.buttons.length > 0 ? 0 : -1);

  toggleOpen() {
    this.expanded.update((v) => !v);
  }
}
