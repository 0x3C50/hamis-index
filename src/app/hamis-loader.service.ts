import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hamis} from "./hamis";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HamisLoaderService {
  constructor(private hc: HttpClient) { }

  getHamikset(): Observable<Hamis[]> {
    return this.hc.get<Hamis[]>("hamis-list.json");
  }

  getHamis(id: string, defaultHamis: Hamis): Observable<Hamis> {
    return this.getHamikset().pipe(
      map((v: Hamis[]) => v.find(it => it.id == id) ?? defaultHamis)
    )
  }
}
