import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menus: string[];

  constructor() {}

  ngOnInit() {
    this.menus = ["Home", "Transact", "Enquire", "Request", "Fund Transfer"];
  }
}
