import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardNumber'
})
export class FormatCardNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value === undefined) {
      return '0000 0000 0000 0000';
    }
    let cardNumber: string = '';
    for (let index = 1; index < 17; index++) {
      const char: string = value[index - 1];
      cardNumber += this.getChar(char, value, index); // eğer sayı girilmiş ise sayıyı değilse gizleme karekterini gösterir.
      cardNumber += (index % 4 == 0 ? ' ' : '') // Her 4 harf de bir boşluk ekler.
    }
    return cardNumber;
  }
  getChar(char: string, value: string, index: number): string {
    if (index >= 16) {
      return '0'
    }
    if (index > 4 && index < 13) {
      return char ? '*' : '0'
    }
    return char ?? '0';
  }

}
