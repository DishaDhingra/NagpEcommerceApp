import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "app/services/authentication.service";

@Component({
  selector: "app-welcome-page",
  styleUrls: ["./welcome-page.component.css"],
  templateUrl: "./welcome-page.component.html"
})
export class WelcomePageComponent implements OnInit {

  constructor(private loginService: AuthenticationService) {
    // Empty.
  }

  public ngOnInit(): void {
   // Empty
  }

}
