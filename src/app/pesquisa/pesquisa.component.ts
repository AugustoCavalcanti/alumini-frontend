import { Component, OnInit } from '@angular/core';
import { TurmasService } from '../turmas.service';
import {FormandosService} from '../formandos.service';
import {PesquisaService} from '../pesquisa.service';


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  turmas = null;
  formandos = null;
  destaques = null;
  cursos = null;
  tela = 'turmas';
  curso = null;
  anoI = null;
  anoF = null;
  destaque = null;
  habilidade = null;
  ocupacao = null;
  local = null;
  formacao = null;
  habilidadesPes = [];
  lista = null;
  busca = null;


  constructor(private turmas$: TurmasService,
              private formandos$: FormandosService,
              private pequisa$: PesquisaService) { }

  pesquisar() {
    this.pequisa$.lista(this.busca)
      .subscribe(data => this.lista = data);
  }


  ngOnInit() {
    this.turmas$.lista()
      .subscribe(data => this.turmas = data);

    this.formandos$.lista()
      .subscribe(data => this.formandos = data);

    this.turmas$.listaDeCursos()
      .subscribe(data => this.cursos = data);

    this.formandos$.listaDestaques()
      .subscribe(data => this.destaques = data);
  }

  mudarTela(tela){
    this.tela = tela;
  }

  atualizarListaCursos(form) {
    this.turmas$.resultadoBusca(this.curso, this.anoI, this.anoF)
      .subscribe(data => this.turmas = data);
  }

  atualizarListaFormandos(form) {
    console.log(this.curso, this.destaque, this.habilidadesPes, this.ocupacao, this.local, this.formacao, this.anoF, this.anoI);
    this.formandos$.resultadoBusca(this.curso, this.destaque, this.habilidadesPes, this.ocupacao, this.local,
      this.formacao, this.anoI, this.anoF)
      .subscribe(data => this.formandos = data);
  }

  addHabilidades() {
    if (this.habilidadesPes.indexOf(this.habilidade) === -1) {
      this.habilidadesPes.push(this.habilidade);
    }
  }

  remHabilidade(habilidade) {
    if (this.habilidadesPes.indexOf(habilidade) === 0) {
      this.habilidadesPes.splice(0, 1);
    }
    this.habilidadesPes.splice(this.habilidadesPes.indexOf(habilidade), this.habilidadesPes.indexOf(habilidade));
    console.log(this.habilidadesPes);
  }


}
