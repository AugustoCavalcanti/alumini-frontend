import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Turma } from './models/turma';
import {tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  URL = 'http://127.0.0.1:8000/api/turmas/';

  constructor(protected http: HttpClient) {
  }

  lista(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.URL);
  }

  listaDeCursos() {
    return this.lista()
      .pipe(
        map(turmas => {
          let lista = [];
          for (let turma of turmas) {
            if (lista.indexOf(turma.curso) === -1) {
              lista.push(turma.curso);
            }
          }
          return lista;
        })
      );
  }

  listaPesquisa(curso) {
    let curso1 = '' ;

    if (curso !== null) {
      curso1 = curso;
    }
    return this.http.get<Turma[]>(this.URL.concat(`?curso=${curso1}`));
  }

  resultadoBusca(curso, anoI, anoF) {
    return this.listaPesquisa(curso)
      .pipe(
        map( turmas => {
          let anoI1 = 0;
          let anoF1 = 9999;
          if (anoI !== null) {
            anoI1 = anoI;
          } else {
            anoI1 = 0;
          }
          if (anoF !== null) {
            anoF1 = anoF;
          } else {
            anoF1 = 999999;
          }
          let lista = [];
          for (let turma of turmas) {
            if (turma.ano >= anoI1 && turma.ano <= anoF1) {
              lista.push(turma);
            }
          }
          return lista;
        })
      );
  }
}

