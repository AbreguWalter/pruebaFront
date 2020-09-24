import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversiones } from '../class/Conversiones';

@Injectable({ providedIn: 'root' })
export class ConversionService {

  // tslint:disable-next-line: no-inferrable-types
  private url: string = 'http://localhost:8082/tipo-cambio';

  constructor(private http: HttpClient) { }

  getConversion(): Observable<Conversiones[]> {
    return this.http.get<Conversiones[]>(this.url);
  }

}
