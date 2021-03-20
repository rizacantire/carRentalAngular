import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { Filters } from 'src/app/models/filters';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [ ];
  carDetails: CarDetail[] = [];
  brandCarText = "";
  dataLoaded = false;


  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"] && params["colorId"] ){
        this.getCarByFilter(params["brandId"],params["colorId"])
      }
      else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }
  getCarByFilter(brandId:Number, colorId: Number) {
    this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response => {
      this.cars = response.data,
      this.dataLoaded = true
      if(this.cars.length == 0){
        this.toastr.info('Arama sonuçunuza ait bir araç bulunmamaktadır.', 'Arama Sonucu');
      }
    })

  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
   }

   getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
   }

   getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true
    })
   }

   getCarDetails(){
     this.carService.getCarDetails()
       .subscribe(response => {
         this.carDetails = response.data
       });
   }

}
