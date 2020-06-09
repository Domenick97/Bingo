import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor( private http: HttpClient) { }

  isPartyReady(): Observable<boolean> {
    return this.http.get<boolean>('https://portfolio-bingo.herokuapp.com/isReady')
  }

}
