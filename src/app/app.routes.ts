import { Routes } from '@angular/router';
import {HamisListComponent} from "./hamis-list/hamis-list.component";
import {HamisDetailsComponent} from "./hamis-details/hamis-details.component";

export const routes: Routes = [
  {
    path: "",
    component: HamisListComponent
  },
  {
    path: "view-hamis/:id",
    component: HamisDetailsComponent
  }
];
