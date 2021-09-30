import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get<User[]>(this.SERVER_URL + 'users');
  }

  public getUser(userName: String) {
    return this.httpClient.get<User>(this.SERVER_URL + 'users/?userName='+ userName);
  }
  public createUser(personForm: FormGroup) {
    return this.httpClient.post(this.SERVER_URL + 'users', personForm.value)
  }

  public login(loginForm: FormGroup) {
    return this.httpClient.post(this.SERVER_URL + 'users/authenticate', loginForm.value);
  }
}
