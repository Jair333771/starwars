import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../Rest/people.service';
import { environment } from '../../../environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public elemenstHome: any;
  public root = "/assets/images/elements/"
  public about: any;
  public info: any;

  state = 1;
  all: any[];
  public urlImages = "";
  constructor(protected peopleService: PeopleService) {
    this.urlImages = environment.urlimages;
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
        properties: [
          { name: 'Species', image: 'characters.jpg', endpoint: "species", images: "species/" },
          { name: 'Starships', image: 'starships.jpg', endpoint: "starships", images: "starships/" },
        ]
      },
      {
        id: 3,
        properties: [
          { name: 'Vehicles', image: 'vehicle.jpg', endpoint: "vehicles", images: "vehicles/" },
          { name: 'Films', image: 'films.jpg', endpoint: "films", images: "films/" },
        ]
      },
    ];
  }

  getAll(element: any) {
    console.log('getAll', element.name, ' endpoint', element.endpoint);
    this.peopleService.getAll(element.endpoint).subscribe(
      (data) => {
        this.all = data['results'];
        this.all.forEach(item => {
          item.id = item.url.match(/([0-9])+/g)[0];
          item.image = this.urlImages + element.images + item.id + ".jpg";
          item.endpoint = element.endpoint;
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

  getInfo(image: any, data: any, endpoint: string){
    console.log('endpoint 2: ' + endpoint);    
    this.info = [
        {        
          id: 1,
          name:this.about.name,
          urlimage:image,
          birthYear: data.birth_year,
          height: data.height,
          mass: data.mass,
          gender: data.gender,
          hairColor: data.hair_color,
          skinColor: data.skin_color
        }
      ];
  }

  getAbout(element: any) {
    console.log('getAbout', element.name, ' endpoint', element.endpoint, 'url', element.image);
    
    this.peopleService.getItem(element.endpoint + "/" + element.id + "/").subscribe(
      (data) => {
        this.about = data;
      
        this.getInfo(element.image, data, element.endpoint);
        console.log('about' , JSON.stringify(this.about), ' info ',  this.info[0]);
      },
      (error) => {
        console.error(error);
      }
      
    );
    this.state = 3;
  }

 /* getAbout(element: any) {
    console.log('getAbout', element.name, ' endpoint', element.endpoint);
    
    this.peopleService.getItem(element.endpoint + "/" + element.id + "/").subscribe(
      (data) => {
        this.all = data[0];
        
        console.log('data' , data, ' D result ', this);
      },
      (error) => {
        console.error(error);
      }
    );
    this.state = 3;
  }*/

}
