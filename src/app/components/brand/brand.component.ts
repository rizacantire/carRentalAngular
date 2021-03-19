import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand : Brand | null;;


  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data


    });
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  setAllBrand(brand:Brand){

    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){

    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
  getAllBrandsClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  clearCurrentBrand(){
    this.currentBrand = null;

  }



}
