import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TurmasComponent} from './turmas/turmas.component';
import {PesquisaComponent} from './pesquisa/pesquisa.component';


const routes: Routes = [
  { path: 'turmas', component: TurmasComponent},
  { path: 'pesquisa', component: PesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
