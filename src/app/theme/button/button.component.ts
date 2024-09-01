import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, output } from "@angular/core";

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class AppButton {
  click = input<Function>();
  type = input<"link" | "icon-only" | "btn">("btn");

  text = input<string>();
}
