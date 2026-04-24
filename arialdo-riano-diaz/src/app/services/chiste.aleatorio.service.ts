import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ChisteAleatorioModel } from '../models/chiste.aleatorio.model';

@Injectable({ providedIn: 'root' })
export class ChisteAleatorioService {
  private api = 'https://api.chucknorris.io/jokes/random';
  private storageKey = 'ChisteAletaorio';

  constructor(private http: HttpClient) {}

  getChisteAleatorio(): Observable<ChisteAleatorioModel> {
    const local = localStorage.getItem(this.storageKey);
    if (local) {
      return of(JSON.parse(local));
    }
    return this.http.get<ChisteAleatorioModel>(this.api);
  }
}
