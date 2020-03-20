import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [];

  constructor() { }

  ngOnInit(): void {

    this.menu = [
      { display: 'People', url: '#' },
      { display: 'Planets', url: '#' },
      { display: 'Films', url: '#' },
      { display: 'species', url: '#' },
      { display: 'Vehicules', url: '#' },
      { display: 'Starships', url: '#' },
      { display: 'Video', url: '//youtube.com' }
    ];

  }

}
