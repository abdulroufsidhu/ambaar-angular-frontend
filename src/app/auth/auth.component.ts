import { Component, inject, model, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppLogin } from "./login/login.component";
import { AppSignup } from "./signup/signup.component";
import { AppButton } from "../theme/button/button.component";
import { Router } from "@angular/router";
import { DatalayerService, LoginReq } from "ngx-orgolink-datalayer";
@Component({
  standalone: true,
  imports: [CommonModule, AppSignup, AppLogin, AppButton],
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrl: "./auth.component.scss",
})
export class AppAuth {
  // networkService = inject(NetworkService)
  dataLayer = inject(DatalayerService);

  router = inject(Router);

  email = model<string>();
  password = model<string>();
  passwordType = "password";

  activePage: "login" | "signup" = "login";

  onSuccess = output<Function>();

  onLoginClick() {
    console.log("onloginclick");
    if (!!!this.email()) {
      // Email is empty
    }
    if (!!!this.password) {
      // Password is empty
    }
    const lr: LoginReq = {
      email: this.email() as string,
      password: this.password() as string,
    };
    const loginRes = this.dataLayer.authDataLayer.login(lr);
    loginRes.subscribe((v) => {
      if (!!v.data?.token && !!v.data?.user)
        this.router.navigate(["/dashboard"]);
    });
  }
  onSignupClick() {}

  onPasswordTypeToggle() {
    if (this.passwordType == "password") this.passwordType = "text";
    else this.passwordType = "password";
    console.log("passwordType shall be", this.passwordType);
  }
}
