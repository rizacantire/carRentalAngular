import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilterPipe'
})
export class CarFilterPipePipe implements PipeTransform {

  transform(value: Car[], brandCarText: string): Car[] {
    brandCarText = brandCarText?brandCarText.toLocaleLowerCase():""
    return brandCarText?value.filter((c:Car)=>c.brandName.toLocaleLowerCase().indexOf(brandCarText)!==-1):value;
  }
}
