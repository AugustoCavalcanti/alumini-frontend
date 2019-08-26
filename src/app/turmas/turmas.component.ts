import { Component, OnInit } from '@angular/core';
import { TurmasService } from '../turmas.service';


@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  turmas = null;

  constructor(private turmas$: TurmasService, ) { }

  ngOnInit() {
    this.turmas$.lista()
      .subscribe(data => this.turmas = data);
  }

}
