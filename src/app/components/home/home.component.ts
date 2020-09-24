import { ConversionService } from './../../servicios/conversion.service';
import { Component, OnInit } from '@angular/core';
import { Conversiones } from '../../class/Conversiones';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  conversion: Conversiones[] = [];

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
    this.conversionService.getConversion()
    .subscribe(
      c => this.conversion = c
    );
  }

}
