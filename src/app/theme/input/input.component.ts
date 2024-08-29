import { CommonModule } from "@angular/common";

import {
  Component,
  EventEmitter,
  HostBinding,
  input,
  model,
  output,
} from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-input",
  standalone: true,
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
})
export class AppInput {
  type = model<string>("text");
  min? = input<number>();
  max? = input<number>();
  minlength? = input<number>();
  maxlength? = input<number>();
  placeholder = input<string>("Placeholder...");

  value = model<string>();
}
