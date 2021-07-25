import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private _modalController: ModalController) { }

  ngOnInit() {
  }
  mostrarModal() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this._modalController.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'Clase',
        pais:'Colombia'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log("onWillDismiss");
    console.log(data);
    // const { datas } = await modal.onWillDismiss();
    // console.log("onWillDismiss");
    // console.log(datas);

  }
}
