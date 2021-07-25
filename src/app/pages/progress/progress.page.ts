import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  progressValue: number = 0;
  constructor() { }

  ngOnInit() {
  }

  runProgress() {
    for (let index = 0; index <= 100; index++) {
      setTimeout(() => {
        this.progressValue = index / 100;
      }, 30 * index);
    }
  }

}
