import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value: Color[], colorCarText: string): Color[] {
    colorCarText = colorCarText?colorCarText.toLocaleLowerCase():""
    return colorCarText?value.filter((c:Color)=>c.name.toLocaleLowerCase().indexOf(colorCarText)!==-1):value;
  }

}
