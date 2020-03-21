import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  menu = [
    { display: 'People', url: '#' },
    { display: 'Planets', url: '#' },
    { display: 'Films', url: '#' },
    { display: 'species', url: '#' },
    { display: 'Vehicules', url: '#' },
    { display: 'Starships', url: '#' },
    { display: 'Video', url: '//youtube.com' }
  ];
  
  constructor() { }
}
