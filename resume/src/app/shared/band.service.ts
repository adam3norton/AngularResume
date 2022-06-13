import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Band } from '../shared/band.model';


Injectable()
export class BandService {
  bands = [{id: 0, name: "Coldplay", genre: "Rock"},
  {id: 1, name: "Rush", genre: "Rock"},
  {id: 2, name: "The Eagles", genre: "Rock"}];

  getBand(id: number): Observable<Band> {
    // assumes that the id requested will always exist
    const raffle = this.bands.find(r => r.id === id)!;
    return of(raffle);
  }
}
