import { Component, model } from "@angular/core";
import { AppButton } from "../theme/button/button.component";
import { CommonModule } from "@angular/common";

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
  buttons = model<NavButton[]>([
    {
      click: () => {
        console.log("clicked");
      },
      text: "inventory",
      icon: "🧾",
    },
  ]);

  toggleOpen() {
    this.expanded.update((v) => !v);
  }
}
