import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hamis} from "../hamis";
import {HamisLoaderService} from "../hamis-loader.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

const defaultHamis: Hamis = {
  id: "dummy",
  name: "404 Hämis",
  permalinkGif: "hamis.gif",
  permalinkPng: "hamis.gif",
  description: "This Hämis wasn't found. Maybe look for something else?",
  credit: "TBD"
};

@Component({
  selector: 'app-hamis-details',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './hamis-details.component.html',
  styleUrl: './hamis-details.component.css'
})
export class HamisDetailsComponent {
  selectedHamis!: Observable<Hamis>;
  constructor(private route: ActivatedRoute, hamisLoader: HamisLoaderService) {
    this.route.params.subscribe(it => this.selectedHamis = hamisLoader.getHamis(it['id'], defaultHamis))
  }
}
