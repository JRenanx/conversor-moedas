import { Component, Input } from '@angular/core';
import { Moedas } from 'src/app/modules/model/moeda';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent {

  @Input() moedas!: Moedas;
}
