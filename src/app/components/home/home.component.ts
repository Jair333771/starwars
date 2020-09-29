import { Component, OnInit, NgZone } from '@angular/core';
import { PeopleService } from '../../Rest/people.service';
import { environment } from '../../../environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { RemoveUnderscorePipe } from '../../utilities/remove-underscore-pipe';
import { ChangeDetectorRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppComponent {

  public elemenstHome: any;
  public root = "/assets/images/elements/"
  public about: any;
  public info: any;
  public imageDetail: any;
  public characteristics: any = [];
  public externalLinks: any = []; 
  hiddenProperties = ["created", "edited", "url"];

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

  getAbout(element: any) {
    console.log("entra a getAbout");
    this.characteristics = [];
    this.peopleService.getItem(element.url).subscribe(
      (data) => {
        this.info = data;
        this.imageDetail = element.image;
        AppComponent.state = 3;
        this.info = this.removeItems(this.info, this.hiddenProperties);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteHistory( id:string,index:number ){
    AppComponent.all.splice(index,1)
    this.historyService.deleteHistory(id);
  }

  removeItems(obj: any, list: string[]) {
    console.log("entra a removeItems");
    var newObject = Object.keys(obj).reduce((object, key) => {
      if (!list.includes(key)) {
        if(!Array.isArray(obj[key])) {
          object[key] = obj[key];
        }
        else if (obj[key].length > 0){
          
          var item = {
            title: key,
            details: []
          };

          // Obtener los sub elementos del elemento actual            
          obj[key].forEach(link => {
            
            this.peopleService.getItem(link).subscribe(
              (response) => {
                var res: any = response;
                var detail = {
                  id: link.match(/([0-9])+/g)[0],
                  name: typeof res.name != 'undefined' ? res.name : res.title,
                  url: link,
                  type: item.title,
                  image: this.urlImages + item.title + "/" + link.match(/([0-9])+/g)[0] + ".jpg"
                };
                item.details.push(detail);
              },
              (error) => {
                console.error(error);
              }
            );            
          });
          setTimeout(() => {
            this.characteristics.push(item);
            console.log(item)
          }, 3000);
        }
      }      
      return object
    }, {})
    return newObject;
  }
}
