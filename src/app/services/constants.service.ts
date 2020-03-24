import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  menu = [
    { display: 'Characters', url: '#' },
    { display: 'Planets', url: '#' },
    { display: 'Films', url: '#' },
    { display: 'species', url: '#' },
    { display: 'Vehicules', url: '#' },
    { display: 'Starships', url: '#' },
    { display: 'Video', url: '//youtube.com' }
  ];
  
  endpoint = "https://swapi.co/api/";  
  urlimages = "https://starwars-visualguide.com/assets/img/"
  constructor() { }
}
