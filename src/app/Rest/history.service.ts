import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  endpoint = "";
  constructor(protected http: HttpClient) {
    this.endpoint = environment.dataendpoint;
    console.log(this.endpoint);
  }

  getAll(path: string) {
    console.log(path);
    console.log(this.endpoint);
    return this.http.get(this.endpoint + path);
  }
}
