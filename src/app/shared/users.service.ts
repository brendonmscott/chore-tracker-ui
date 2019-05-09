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

  public addFamilyMember(userId: string, user: User): Observable<any> {
    return this.http.post(`${this.BASE_URL}/${userId}/familyMembers`, user,
      { responseType: 'text' }
    );
  }

  public removeFamilyMember(userId: string, familyMemberId: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${userId}/familyMembers/${familyMemberId}`,
      { responseType: 'text' }
    );
  }

  public updateFamilyMember(userId: string, familyMember: User): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${userId}/familyMembers`, familyMember,
      { responseType: 'text' }
    );
  }
}
