import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  private BASE_URL = 'http://localhost:8765/chore-tracker/users';

  constructor(private http: HttpClient) { }

  public get(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${id}`);
  }
}
