import { Pipe, PipeTransform } from '@angular/core';
import tinycolor from 'tinycolor2';

@Pipe({
  name: 'invColor'
})
export class InvColorPipe implements PipeTransform {

  transform(value: string, format?: any): string {
    return tinycolor(value).toString(format);
  }

}
