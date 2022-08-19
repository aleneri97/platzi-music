import { Component } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  slideOps = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };
  artists: any = [{}, {}, {}, {}, {}, {}, {}, {}];
  songs: any = [{}, {}, {}, {}, {}, {}, {}, {}];
  albums: any = [{}, {}, {}, {}, {}, {}, {}, {}];

  constructor(private musicService: PlatziMusicService) {
  }

  ionViewDidEnter() {
    this.musicService.getNewReleases().subscribe(releases => {
      this.artists = this.musicService.getArtists().items;
      console.log(this.artists);
      this.songs = releases.albums.items.filter(e => e.album_type === 'single');
      this.albums = releases.albums.items.filter(e => e.album_type === 'album');
    });
  }

}
