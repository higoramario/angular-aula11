import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  aplicacao: string = 'App Restaurante';
  versao: number = 10;
  cardapio: string[] = [
    'Feijoada',
    'Estrogonofe',
    'Virado',
    'Lasanha',
    'Pizza',
  ];
}
