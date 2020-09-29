import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  endpoint = "";
  constructor(protected http: HttpClient) {
    this.endpoint = environment.dataendpoint;
    console.log(this.endpoint);
  }

  getAll(path: string, user:string) {

    console.log(this.endpoint + path+"/"+ user);
    return this.http.get(this.endpoint + path+"?user="+ user).pipe(map(i=>{return i}));
  }
  
  deleteHistory(id:string){
    return this.http.delete("https://localhost:44383/history/"+id)
    .subscribe(data => console.log(data));
  }
  postHistory( user:string, screen:string ){
    console.log("holas")
    return this.http.post("https://localhost:44383/history/",
      {
        "User":user, 
        "Screen":screen
      }
    ).subscribe(data => console.log(data));
    
  }
}


/*DeleteEmployee(emp: Employee) {  
  const params = new HttpParams().set('ID', emp.id);  
  const headers = new HttpHeaders().set('content-type', 'application/json');  
  var body = {  
                    Fname: emp.firstname, 
                  Lname: emp.lastname, 
                  Email: emp.email, 
                  ID: emp.id  
  }  
  return this.http.delete<Employee>(ROOT_URL + '/Employees/' + emp.id)  
 }  
}*/