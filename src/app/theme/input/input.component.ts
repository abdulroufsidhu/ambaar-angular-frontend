import {
  Component,
  EventEmitter,
  HostBinding,
  input,
  output,
} from "@angular/core";

@Component({
  selector: "app-input",
  standalone: true,
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.scss",
})
export class AppInput {
  type = input<string>("text");
  min? = input<number>();
  max? = input<number>();
  minlength? = input<number>();
  maxlength? = input<number>();
  placeholder = input<string>("Placeholder...");

  change = new EventEmitter<Event>();

  onChange(event: Event): void {
    this.change.emit(event);
  }
}
