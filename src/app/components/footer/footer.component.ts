import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  
  menu = [];
  collaborators = [
    {name: "Miguel Ángel Bermudez"}, 
    {name: "Johan Sebastian Torres"},  
    {name: "Steven Rodríguez"},  
    {name: "Jair Rodríguez"}
  ];

  constructor() { 
    this.menu = environment.menu;
  }

  ngOnInit() {
  }

}
