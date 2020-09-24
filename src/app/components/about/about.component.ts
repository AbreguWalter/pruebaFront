import { TipoCambio } from './../../class/TipoCambio';
import { Component, OnInit } from '@angular/core';
import { TipoCambioService } from '../../servicios/tipo-cambio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  tipoCambio: TipoCambio[] = [];

  constructor(
    protected tipoCambioService: TipoCambioService
  ) { }

  ngOnInit(): void {
    this.tipoCambioService.getTipoCambio()
    .subscribe(
      tc => this.tipoCambio = tc
    );
  }

}
