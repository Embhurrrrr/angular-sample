import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverUrl = 'http://localhost:3000';

  user: User[] = [];

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post(`${this.serverUrl}/users`, user);
  }
}
