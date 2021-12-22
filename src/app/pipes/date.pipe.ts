import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Pdate'
})
export class DatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value) return value;

    const date = new Date(value);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const fullYear = date.getFullYear();
    return `${day}/${month}/${fullYear}`;
  }

}
