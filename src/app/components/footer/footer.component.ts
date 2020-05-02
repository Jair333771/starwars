import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent extends AppComponent {
  
  collaborators = [
    {name: "Miguel Ángel Bermudez"}, 
    {name: "Johan Sebastian Torres"},  
    {name: "Steven Rodríguez"},  
    {name: "Jair Rodríguez"}
  ];

  ngOnInit() {    
  }

}
