import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400,
  };
  slides = [
    {
      title: 'Escucha tu música',
      subtitle: 'En cualquier lugar',
      description: 'Ullamco labore sunt deserunt minim Ullamco labore sunt deserunt minim.',
      icon: 'caret-forward-outline',
    },
    {
      title: 'Disfruta de nuestro reproductor',
      subtitle: 'De videos increíbles',
      description: 'Ullamco labore sunt deserunt minim Ullamco labore sunt deserunt minim.',
      icon: 'videocam-sharp'
    },
    {
      title: 'Accede al exclusivo',
      subtitle: 'Modo deporte',
      description: 'Ullamco labore sunt deserunt minim Ullamco labore sunt deserunt minim.',
      icon: 'bicycle-sharp'
    },
  ];

  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

}
