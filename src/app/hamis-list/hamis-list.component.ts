import {Component, OnInit} from '@angular/core';
import {HamisLoaderService} from "../hamis-loader.service";
import {Hamis} from "../hamis";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hamis-list',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './hamis-list.component.html',
  styleUrl: './hamis-list.component.css'
})
export class HamisListComponent implements OnInit {
  hamisList!: Observable<Hamis[]>
  constructor(private hcl: HamisLoaderService) {}
  ngOnInit(): void {
    this.hamisList = this.hcl.getHamikset();
  }
}
