import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }


   getTransferRequest() {
    const url = `https://functioninputbinding.azurewebsites.net/api/Function1`;
    return this.httpclient.get<Item[]>(url);

  }
}
