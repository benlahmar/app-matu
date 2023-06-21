import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  getusers()
  {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  getuserbyid(id:number)
  {
    return this.http.get<IUser>(this.baseUrl+"/"+id);
  }

}
