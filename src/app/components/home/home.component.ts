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
  public imageDetail: any;
  public characteristics: any = [];

  hiddenProperties = ["created", "edited", "url"];

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
    this.all = [];
    this.peopleService.getAll(element.endpoint).subscribe(
      (data) => {
        this.all = data['results'];
        this.all.forEach(item => {
          item.id = item.url.match(/([0-9])+/g)[0];
          item.image = this.urlImages + element.images + item.id + ".jpg";
          item.endpoint = element.endpoint;

          if (element.endpoint == "films")
            item.name = item.title;

          this.state = 2;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAbout(element: any) {
    this.peopleService.getItem(element.url).subscribe(
      (data) => {
        this.info = data;
        this.imageDetail = element.image;
        this.state = 3;
        this.info = this.removeItems(this.info, this.hiddenProperties);
        console.log(this.info);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  removeItems(obj: any, list: string[]) {
    var newObject = Object.keys(obj).reduce((object, key) => {
      if (!list.includes(key)) {
        if(!Array.isArray(obj[key])) {
          object[key] = obj[key];
        }
        else if (obj[key].length > 0){
          var item = {
            title: key,
            list: obj[key]
          };
          this.characteristics.push(item);
        }
          
      }      
      return object
    }, {})
    return newObject;
  }
}
