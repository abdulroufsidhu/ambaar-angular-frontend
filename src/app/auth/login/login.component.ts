import { Component, model } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppInput } from "../../theme/input/input.component";
import { AppButton } from "../../theme/button/button.component";

@Component({
  imports: [CommonModule, AppInput, AppButton],
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  standalone: true,
})
export class AppLogin {
  email = model<string>();
  password = model<string>();
  passwordType = "password";

  onPasswordTypeToggle() {
    if (this.passwordType == "password") this.passwordType = "text";
    else this.passwordType = "password";
    console.log("passwordType shall be", this.passwordType);
  }
}
