import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Habilidade} from './models/habilidade';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = 'http://localhost:8000/api/habilidades/';

  constructor(protected http: HttpClient) {
  }

  lista(): Observable<Habilidade[]> {
    return this.http.get<Habilidade[]>(this.URL);
  }
}
