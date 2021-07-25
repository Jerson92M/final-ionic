import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private _dataService: DataService,
              private _menuController:MenuController) { }

  ngOnInit() {
    this.componentes = this._dataService.getMenu();
  }
  mostrarMenus() {
    this._menuController.open('first');
  }

}

