import { Component } from '@angular/core';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

  constructor(private _dataServices: DataService) {
    this.componentes = this._dataServices.getMenu();
  }
}
