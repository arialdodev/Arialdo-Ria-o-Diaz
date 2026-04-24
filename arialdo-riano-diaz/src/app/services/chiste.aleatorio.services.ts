import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ChisteAleatorio } from '../models/chiste.aleatorio.model';

@Injectable({ providedIn: 'root' })
export class ChisteAleatorioServices {
  private api = 'https://api.chucknorris.io/jokes/random';
  private storageKey = 'ChisteAletaorio';

  constructor(private http: HttpClient) {}

  getChisteAleatorio(): Observable<ChisteAleatorio[]> {
    const local = localStorage.getItem(this.storageKey);
    if (local) {
      return of(JSON.parse(local));
    }
    return this.http.get<ChisteAleatorio[]>(this.api);
  }
}
