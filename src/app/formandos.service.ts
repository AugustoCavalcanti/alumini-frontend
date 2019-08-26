import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formando} from './models/formando';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormandosService {
  URL = 'http://localhost:8000/api/formandos/';

  constructor(protected http: HttpClient) { }

  lista(): Observable<Formando[]> {
    return this.http.get<Formando[]>(this.URL);
  }

  conferirHabilidades(listaFormando, listaPesquisa) {
    if (listaPesquisa !== []) {
      let lista = [];
      for (let habilidade of listaFormando) {
        lista.push(habilidade.nome);
      }
      for (let habilidade of listaPesquisa) {
        console.log(habilidade);
        if (lista.indexOf(habilidade) === -1) {
          return false;
        }
      }
    }
    return true;
  }

  listaPesquisa(curso, destaque, ocupacao, local, formacao) {
    let curso1 = '' ;
    let destaque1 = '' ;
    let ocupacao1 = '' ;
    let local1 = '' ;
    let formacao1 = '' ;

    if (curso !== null) {
      curso1 = curso;
    }
    if (destaque !== null) {
      destaque1 = destaque;
    }
    if (ocupacao !== null) {
      ocupacao1 = ocupacao;
    }
    if (local !== null) {
      local1 = local;
    }
    if (formacao !== null) {
      formacao1 = formacao;
    }
    return this.http.get<Formando[]>(this.URL.concat(`?curso=${curso1}&destaque=${destaque1}&ocupacao=${ocupacao1}&local=${local1}&formacao=${formacao1}`));
  }

  resultadoBusca(curso, destaque, habilidades, ocupacao, local, formacao, anoI, anoF) {
    return this.listaPesquisa(curso, destaque, ocupacao, local, formacao)
      .pipe(
        map( formandos => {
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
          for (let formando of formandos) {
            if (this.conferirHabilidades(formando.habilidades, habilidades) === true && formando.ano >= anoI1 && formando.ano <= anoF1) {
              lista.push(formando);
            }
          }
          return lista;
        })
      );
  }

  listaDestaques() {
    return this.lista()
      .pipe(
        map(formandos => {
          let lista = [];
          for (let formando of formandos) {
            if (formando.destaque) {
              lista.push(formando);
            }
          }
          return lista.slice(0, 6);
        })
      );
  }
}
