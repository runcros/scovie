import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnouncementsService {
  private url = "http://localhost:3000/api/anouncements";

  constructor(private httpClient : HttpClient) { }

  getAnouncements() {
    return this.httpClient.get(this.url);
  }

}
