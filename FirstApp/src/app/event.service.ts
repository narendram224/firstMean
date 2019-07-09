import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
  import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _eventsUrls = "localhost:3000/api/event"
  private _specialUrls = "localhost:3000/api/special"
  constructor(  private http:HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrls)
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialUrls)
  }
}
