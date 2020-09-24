import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoCambio } from '../class/TipoCambio';

@Injectable({ providedIn: 'root' })
export class TipoCambioService {

  // tslint:disable-next-line: no-inferrable-types
  private url: string = 'http://localhost:8082/moneda';

  constructor(private http: HttpClient) {}

  getTipoCambio(): Observable<TipoCambio[]> {
    return this.http.get<TipoCambio[]>(this.url);
  }

  updateTipoCambio(tc: TipoCambio, id: number): Observable<TipoCambio>{
    return this.http.post<TipoCambio>(this.url + '/' + id, tc);
  }
}

