import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  private url = environment.apiUrl + "CarImages/";

  constructor(private httpClient:HttpClient) { }

  getImagesByCar():Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "getimagesbydetail";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.url + "GetImagesDetailById?carid="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}
