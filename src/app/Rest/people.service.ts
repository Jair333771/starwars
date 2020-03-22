import { Injectable } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  peoples = "";
  constructor(protected http: HttpClient, constants: ConstantsService) {
    this.peoples = constants.peoples;
  }

  getAllPeople() {
    return this.http.get(this.peoples);
  }

}
