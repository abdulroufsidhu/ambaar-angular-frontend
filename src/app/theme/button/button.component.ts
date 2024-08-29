import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input } from "@angular/core";

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class AppButton {
  click = new EventEmitter();
  type = input<"link" | "icon-only" | "btn">("btn");

  text = input<string>();
}
