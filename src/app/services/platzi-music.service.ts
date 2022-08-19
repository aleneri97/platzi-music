import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://platzi-music-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get<{ albums: any }>(`${URL}/browse/new-releases`);
  }
}
