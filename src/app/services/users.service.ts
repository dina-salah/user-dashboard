import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url :string ='https://reqres.in/api/user?page={page}'
  private url_id :string ='https://reqres.in/api/users/'
  
  constructor(private http:HttpClient ) { }

  feach_user(searchvalue :any) :Observable<any> {
     return this.http.get<any>(`${this.url_id}${searchvalue}`)
    //  .pipe(map(Response => Response.data))
  }
  
}
