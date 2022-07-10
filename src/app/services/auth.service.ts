import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_API: String = 'http://localhost:3000/api/auth';

  constructor(private httpClient: HttpClient) { }

  // private signIn(user: User) {
  //   return this.httpClient.post < User > this.URL_API + '/signin', user);
  // }

}
