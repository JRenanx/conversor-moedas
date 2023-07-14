import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moedas } from 'src/app/modules/model/moeda';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {


  constructor(private http: HttpClient) { }

  public valor!: number ;
  public moedas!: Moedas;


  getMoedas(): Observable<any> {
    let url = 'https://api.hgbrasil.com/finance?format=json-cors&key=3881a66c';
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.results.currencies;
      })
    );
  }

  public converteMoeda() {
    this.getMoedas().subscribe((moedas) => {
      const realDolar = (this.valor / moedas.USD.buy).toFixed(2);
      const realEuro = (this.valor / moedas.EUR.buy).toFixed(2);
      const realPeso = (this.valor / moedas.ARS.buy).toFixed(2);

      this.moedas = {
        dolar: Number(realDolar),
        euro: Number(realEuro),
        peso: Number(realPeso)
      }
    });
  }
}