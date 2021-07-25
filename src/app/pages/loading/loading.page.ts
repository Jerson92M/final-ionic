import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;


  constructor(private _loadingController:LoadingController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentLoading('Hola Clase');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
 
  }

  async presentLoading(msg: string) {
    this.loading = await this._loadingController.create({
      cssClass: 'my-custom-class',
      message: msg
    });
    await this.loading.present();
  }

}
