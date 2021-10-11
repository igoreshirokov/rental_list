import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'API';
  data: any;

  constructor (public api: ApiService) {

  }

  ngOnInit() {
    this.api.data
    .subscribe((v: any) => {
      this.data = v['response']
      console.log(this.data)
    });
  }
}
