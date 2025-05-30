import {Component, inject, OnInit} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";
import {RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faIconLibray = inject(FaIconLibrary);

  ngOnInit() {
    this.initFontAwesome();
  }
  private initFontAwesome(){
    this.faIconLibray.addIcons(...fontAwesomeIcons);
  }
}
