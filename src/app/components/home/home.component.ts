import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../Rest/people.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public elemenstHome: any;
  public root = "/assets/images/elements/"
  state = 1;
  all: any[];
  public urlImages = "";
  constructor(protected peopleService: PeopleService, protected constants: ConstantsService) {
    this.urlImages = constants.urlimages;
  }

  ngOnInit(): void {
    this.getElement();
  }

  getElement() {
    this.elemenstHome = [
      {
        id: 1,
        properties: [
          { name: 'Characters', image: 'people.jpg', endpoint: "people", images: "characters/" },
          { name: 'Planets', image: 'planet.jpg', endpoint: "planets", images: "planets/" },
        ]
      },
      {
        id: 2,
        endpoint: "/people",
        properties: [
          { name: 'Species', image: 'characters.jpg', endpoint: "species", images: "species/" },
          { name: 'Starships', image: 'starships.jpg', endpoint: "starships", images: "starships/" },
        ]
      },
      {
        id: 3,
        endpoint: "/people",
        properties: [
          { name: 'Vehicles', image: 'vehicle.jpg', endpoint: "vehicles", images: "vehicles/" },
          { name: 'Films', image: 'films.jpg', endpoint: "films", images: "films/" },
        ]
      },
    ];
  }

  getAll(element: any) {
    this.peopleService.getAll(element.endpoint).subscribe(
      (data) => {
        this.all = data['results'];
        this.all.forEach(item => {
          item.id = item.url.match(/([0-9])+/g)[0];
          item.image = this.urlImages + element.images + item.id + ".jpg";
          if (element.endpoint == "films")
            item.name = item.title;
        });
        console.log(this.all);
      },
      (error) => {
        console.error(error);
      }
    );
    this.state = 2;
  }
}
