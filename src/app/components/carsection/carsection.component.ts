import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-carsection',
  templateUrl: './carsection.component.html',
  styleUrls: ['./carsection.component.css']
})
export class CarsectionComponent implements OnInit {

  constructor(private brandService:BrandService,private colorService:ColorService) { }
  brands: Brand[] = [];
  colors: Color[] = [];
  brandFilter: Number;
  colorFilter: Number;

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
   });
  }
  getSelectedBrand(brandId: Number) {

    if (this.brandFilter == brandId){

      return true;
    }
    else{
      return false;
    }

  }
  getSelectedColor(colorId: Number) {

    if (this.colorFilter == colorId){

      return true;}
    else

      return false;
  }
}
