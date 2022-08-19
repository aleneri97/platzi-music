import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlatziMusicService } from '../services/platzi-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

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

  constructor(private musicService: PlatziMusicService, private modalController: ModalController) {
  }

  ionViewDidEnter() {
    this.musicService.getNewReleases().subscribe(releases => {
      this.artists = this.musicService.getArtists().items;
      console.log(this.artists);
      this.songs = releases.albums.items.filter(e => e.album_type === 'single');
      this.albums = releases.albums.items.filter(e => e.album_type === 'album');
    });
  }

  async showSongs(artist) {
    this.musicService.getArtistTopTracks(artist.id).subscribe(async tracks => {
      const songs = tracks;
      const modal = await this.modalController.create({
        component: SongsModalPage,
        componentProps: {
          songs: songs.tracks,
          artist: artist.name
        }
      });
      return await modal.present();
    });
  }

}
