import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'measurement'
})
export class MeasurementPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case "Litro": return "lt";
      case "Quilograma": return "kg";
      case "Unidade": return "un";
    }

    return "";
  }

}
