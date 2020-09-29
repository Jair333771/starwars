import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent extends AppComponent {
  
  ngOnInit(): void {
  }
}
