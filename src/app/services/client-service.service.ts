import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http:HttpClient) { }
  getPerson(){
    let url = "http://localhost:5500/app/persons";
    return this.http.get(url);
  }
}
