import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = environment.apiUrl + "customers/getcustomers";
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }
}
