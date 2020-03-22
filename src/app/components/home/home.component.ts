import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../Rest/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public elemenstHome: any;
  public root = "/assets/images/elements/"
  people: any[] = [];

  constructor(protected peopleService: PeopleService) {    
  }

  ngOnInit(): void {
    this.getElement();
    this.getAllPeople();
  }

  getElement(){
    this.elemenstHome = [
      {
        id: 1,
        properties: [
          { name: 'Personajes', image: 'people.jpg', link: "#" },
          { name: 'Planetas', image: 'planet.jpg', link: "#" },
        ]
      },
      {
        id: 2,
        properties: [
          { name: 'Especies', image: 'characters.jpg', link: "#" },   
          { name: 'Naves', image: 'starships.jpg', link: "#" },
        ]
      },
      {
        id: 3,
        properties: [
          { name: 'Vehículos', image: 'vehicle.jpg', link: "#" },
          { name: 'Films', image: 'films.jpg', link: "#" },
        ]
      },
    ];
  }  

  getAllPeople(){
    this.peopleService.getAllPeople().subscribe(
      (data) => {
        this.people = data['results'];
        console.log(this.people);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
