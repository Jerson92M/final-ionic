import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  users: any[] = [];
  constructor(public toastController: ToastController) { }

  async presentToast(id: number) {
    this.users = this.users.filter(user => user != id);
    const toast = await this.toastController.create({
      message: `Usuario ${id} eliminado.`,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    for (let index = 1; index < 10; index++) {
      this.users.push(index);
    }
  }

}
