import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PeopleService } from '../app/Rest/people.service';
import { environment } from '../environments/environment';
import { AuthService } from './Rest/auth.service';
import { HistoryService } from './Rest/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public lista : any[]; 
  title = 'starWars';
  public user = "";
  linkVideo = "";
  protected static state = 0;
  menu = [];  
  public static all: any[];
  public urlImages = "";

  constructor(protected peopleService: PeopleService, public auth: AuthService, public historyService: HistoryService) {
    this.urlImages = environment.urlimages;
    this.menu = environment.menu;
    this.linkVideo = environment.video;
    AppComponent.state = environment.state;
    AppComponent.all = [];
  }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe((data:any) => {this.user = data.name;});
  }

  get getListAll(){
    return AppComponent.all;
  }
  
  get getListHistoryAll(){
    return this.lista;
  }

  get State(){
    return AppComponent.state;
  }

  set State(value: number){
    AppComponent.state = value;
  }

  getAll(element: any) {
    
    AppComponent.all = [];
    if(this.auth.loggedIn){
      this.auth.userProfile$.subscribe(
        (data:any) => {
          this.user = data.name;
          debugger;
          if(element.display != "History"){
            this.historyService.postHistory(data.name,element.display);
          }
        });
    }

    if(element.endpoint == "history"){   
      this.historyService.getAll(element.endpoint,this.user)
      .subscribe(((data:any) => { 
        AppComponent.all = data;
        AppComponent.state = 4;
      }));
    }
    else{
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
}
