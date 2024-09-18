import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppDropdown } from "../dropdown/dropdown.component";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [AppDropdown, CommonModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent {
  businessOptions = [{ value: "abc", text: "yoyo Business" }];
  branchOptions = [{ value: "abc", text: "yoyo Branch" }];
}
