import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../app/Rest/people.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'starWars';
  protected static state = 0;
  menu = [];  
  protected static all: any[];
  public urlImages = "";

  constructor(protected peopleService: PeopleService) {
    this.urlImages = environment.urlimages;
    this.menu = environment.menu;
    AppComponent.state = environment.state;
    AppComponent.all = [];
  }

  ngOnInit(): void {
  }

  get getListAll(){
    return AppComponent.all;
  }

  get State(){
    return AppComponent.state;
  }

  set State(value: number){
    AppComponent.state = value;
  }

  getAll(element: any) {
    AppComponent.all = [];
    this.peopleService.getAll(element.endpoint).subscribe(
      (data) => {
        AppComponent.all = data['results'];
        AppComponent.all.forEach(item => {
          item.id = item.url.match(/([0-9])+/g)[0];
          item.image = this.urlImages + element.images + item.id + ".jpg";
          item.endpoint = element.endpoint;

          if (element.endpoint == "films")
            item.name = item.title;

            AppComponent.state = 2;
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
