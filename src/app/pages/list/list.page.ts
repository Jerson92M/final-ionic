import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this._dataService.getUsuarios();
    
  }

  favorite(usuario: any) {
    console.log('favorito: ', usuario);
    this.ionList.closeSlidingItems();
  }
  share(usuario: any) {
    console.log('share: ', usuario);
    this.ionList.closeSlidingItems();
  }
  delete(usuario: any) {
    console.log('delete: ', usuario);
    this.ionList.closeSlidingItems();
    
  }
}
