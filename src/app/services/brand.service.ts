import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/ListResponseModel';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44393/api/";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
    }
}
