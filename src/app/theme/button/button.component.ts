import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, model, output } from "@angular/core";

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class AppButton {
  click = input<Function>();
  type = input<"link" | "expandable" | "btn" | "active">("btn");

  text = input<string>();
}
