import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailAndImagesDto } from '../models/carDetailAndImagesDto';
import { CarImage } from '../models/carimage';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  private url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  getImagesByCar():Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "CarImages/getimagesbydetail";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "CarImages/GetImagesDetailById?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarDetail(carId:Number):Observable<ItemResponseModel<CarDetailAndImagesDto>>{
    let newPath = environment.apiUrl +"CarImages/GetImagesDetailById?carid="+carId;
    return this.httpClient.get<ItemResponseModel<CarDetailAndImagesDto>>(newPath);
  }

}
