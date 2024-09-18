import { Component, model } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppInput } from "../../theme/input/input.component";
import {
  AppDropdown,
  DropdownOption,
} from "../../theme/dropdown/dropdown.component";
import { Country, Person } from "ngx-orgolink-datalayer";

@Component({
  standalone: true,
  imports: [CommonModule, AppInput, AppDropdown],
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.scss",
})
export class AppSignup {
  person = model<Person>({
    first_name: "",
    last_name: "",
    phone_number: [{ number: "" }],
    emails: [{ email: "" }],
    nationalities: [
      {
        number: "",
        type: "NIC",
        country: typeof Country.PAKISTAN,
        issue_date: "",
        expiry_date: "",
      },
    ],
    address: [
      {
        city: "",
        country: typeof Country.PAKISTAN,
        state: "",
        zip: "",
        street: "",
        house_number: "",
      },
    ],
  });
  password = model<string>();
  passwordType = "password";

  private possibleCountries = Object.keys(Country).filter((item) =>
    isNaN(Number(item)),
  );

  countriesOptions: DropdownOption[] = this.possibleCountries.map((o) => {
    return { value: o, text: o };
  });

  selectedCountry = this.countriesOptions.filter(
    (e) => e.value == "PAKISTAN",
  )[0];

  onPasswordTypeToggle() {
    if (this.passwordType == "password") this.passwordType = "text";
    else this.passwordType = "password";
    console.log("passwordType shall be", this.passwordType);
  }
}
