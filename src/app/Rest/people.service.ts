import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  endpoint = "";
  constructor(protected http: HttpClient) {
    this.endpoint = environment.endpoint;
  }

  getAll(path: string) {
    return this.http.get(this.endpoint + path);
  }

  getItem(path: string) {
    return this.http.get(path);
  }

}
