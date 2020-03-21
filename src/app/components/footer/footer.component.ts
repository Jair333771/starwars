import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  
  menu = [];

  constructor(constants: ConstantsService) { 
    this.menu = constants.menu;
  }

  ngOnInit() {
  }

}
