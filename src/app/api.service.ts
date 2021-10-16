import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {
  private url: string = environment.API;
  public data = new Subject();
  
  constructor(private http: HttpClient) {
    this.getEntities()
      .subscribe(response => this.data.next(response))
  }

  ngOnInit() {
  }
  getEntities() {
    return this.http.get(this.url)
  }
}
