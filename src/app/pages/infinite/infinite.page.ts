import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular'

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) ionInfiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    // console.log(event);

    if (this.data.length > 80) {
      this.ionInfiniteScroll.complete();
      this.ionInfiniteScroll.disabled = true;
      return; 
    }

    const nuevoArr = Array(20);
    this.data.push(...nuevoArr);

    setTimeout(() => {
      
      this.ionInfiniteScroll.complete();

    }, 1500);
  }

}
