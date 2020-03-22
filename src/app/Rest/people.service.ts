import { Injectable } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  endpoint = "";
  constructor(protected http: HttpClient, constants: ConstantsService) {
    this.endpoint = constants.endpoint;
  }

  getAll(path: string) {
    return this.http.get(this.endpoint + path);
  }

}
