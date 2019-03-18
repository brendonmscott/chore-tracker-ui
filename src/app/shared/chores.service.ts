import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chore } from '../domain/chore';

@Injectable()
export class ChoresService {

  private BASE_URL = 'http://localhost:8765/chore-tracker/chores';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Chore>> {
    return this.http.get<Array<Chore>>(`${this.BASE_URL}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    });
  }

  public get(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }

  public add(chore: Chore): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, chore,
      { responseType: 'text' }
    );
  }

  public update(chore: Chore): Observable<any> {
    return this.http.put(`${this.BASE_URL}`, chore);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`,
      { responseType: 'text' }
    );
  }
}
