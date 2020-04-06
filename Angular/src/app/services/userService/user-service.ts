import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private server:String = "http://localhost:8080";

  constructor(private _http: HttpClient) {}

  getUsers(){
    return this._http.get(this.server + '/users');
  }

  getUser(userId: number ){
    return this._http.get(this.server + '/users/' + userId);
  }

  addUser(user: User){
    return this._http.post(this.server + '/users',user);
  }

  deleteUser(userId : number){
    return this._http.delete(this.server + '/users/' + userId);
  }

  updateUser(user: User){
    return this._http.put(this.server + '/users/' + user.id, user);
  }



}
