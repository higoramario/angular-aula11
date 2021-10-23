import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contaStrings',
})
export class ContaStringsPipe implements PipeTransform {
  transform(value: string): string {
    let contador: number = 0;

    for (let i = 0; i < value.length; i++) {
      contador++;
    }
    return contador.toString();
  }
}
