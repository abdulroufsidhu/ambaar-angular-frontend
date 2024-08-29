import { Component } from "@angular/core";
import { AppInput } from "../../../theme/input/input.component";
import { AppButton } from "../../../theme/button/button.component";

@Component({
  imports: [AppInput],
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  standalone: true,
})
export class AppLogin {}
