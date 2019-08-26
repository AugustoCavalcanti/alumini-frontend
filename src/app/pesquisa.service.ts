import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  URL = 'http://localhost:8000/api/pesquisa/';

  constructor(protected http: HttpClient) { }

  lista(busca) {
    return this.http.get(this.URL.concat('?search=${busca}'));
  }
}
