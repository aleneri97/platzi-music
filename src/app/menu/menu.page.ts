import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menuController: MenuController, private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menuController.close();
  }

  logout() {
    this.storage.remove('isLogged');
    this.router.navigateByUrl('/login');
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
    this.menuController.close();
  }

}
