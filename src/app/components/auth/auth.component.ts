import { Component, inject, model, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppLogin } from "./login/login.component";
import { AppSignup } from "./signup/signup.component";
import { AppButton } from "../../theme/button/button.component";

@Component({
  standalone: true,
  imports: [CommonModule, AppSignup, AppLogin, AppButton],
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrl: "./auth.component.scss",
})
export class AppAuth {
  // networkService = inject(NetworkService)
  email = model<string>();
  password = model<string>();
  passwordType = "password";

  activePage: "login" | "signup" = "login";

  onSuccess = output<Function>();

  onLoginClick() {}

  onSignupClick() {}

  onPasswordTypeToggle() {
    if (this.passwordType == "password") this.passwordType = "text";
    else this.passwordType = "password";
    console.log("passwordType shall be", this.passwordType);
  }
}
