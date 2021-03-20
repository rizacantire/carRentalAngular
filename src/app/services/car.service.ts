import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = environment.apiUrl + "cars/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getcars"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getcarsdetailsbybrand?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "getcarsdetailsbycolor?id="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsById(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "getcardetailsbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
 }

 getCarDetails():Observable<ListResponseModel<CarDetail>>{
   let newPath = this.apiUrl + "getcars";
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
 }
 getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
  let newPath = this.apiUrl +"getbybrandandcolor?brandId=${brandId}&colorid=${colorId}";
  return this.httpClient.get<ListResponseModel<Car>>(newPath);
}

}
