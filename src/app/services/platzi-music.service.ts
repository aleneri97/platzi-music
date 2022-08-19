import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as dataArtists from '../../assets/artists.json';

const URL = 'https://platzi-music-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return dataArtists;
  }

  getNewReleases() {
    return this.http.get<{ albums: any }>(`${URL}/browse/new-releases`);
  }

  getArtistTopTracks(artistId) {
    return this.http.get<any>(`${URL}/artists/${artistId}/top-tracks?country=CO`);
  }

}
