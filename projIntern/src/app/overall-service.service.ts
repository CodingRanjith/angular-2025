import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverallServiceService {

  constructor(private http:HttpClient) { }

  postMethod(name:string,email:string): Observable<any> {
    const body = {
      name: name,
      email: email
    };
    return this.http.post<any>("http://localhost:3000/posts", body);
  }
}
