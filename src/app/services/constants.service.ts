import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  menu = [
    { display: 'Characters', url: '#' },
    { display: 'Planets', url: '#' },
    { display: 'Films', url: '#' },
    { display: 'Species', url: '#' },
    { display: 'Vehicules', url: '#' },
    { display: 'Starships', url: '#' },
    { display: 'Video', url: '//youtube.com' }
  ];
  
  endpoint =  "https://swapi.dev/api/"; // "http://swapi.py4e.com/api/";  "https://swapi.co/api/";
  urlimages = "https://starwars-visualguide.com/assets/img/"
  constructor() { }
}
