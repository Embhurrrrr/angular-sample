import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../sign-up/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  users: User[] = [];

  getUsers() {
    return this.http.get<User[]>(`${this.serverUrl}/users`);
  }
}
