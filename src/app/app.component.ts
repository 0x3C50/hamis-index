import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {HamisListComponent} from "./hamis-list/hamis-list.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, HamisListComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hamikset-list';
}
