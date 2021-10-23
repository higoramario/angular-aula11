import { Component, Input } from '@angular/core';

@Component({
  selector: 'pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
})
export class PessoaComponent {
  @Input() nome: string = 'Pessoa';
  @Input() idade: string = '40';
  @Input() genero: string = 'Masculino';

  descricao(): string {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou do gênero ${this.genero}`;
  }
}
