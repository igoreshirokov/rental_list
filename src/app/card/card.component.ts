import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  cardType: any;


  constructor() { 

  }

  ngOnInit(): void {
    if (this.card.type == "flat") {
      this.cardType = "квартира";
    } else {
      this.cardType = this.card.type;
    }
  }

  openDetails(id: string): void {
    console.log(id)
    document.getElementById(id)?.classList.remove('card-fullscreen__wrapper__non-active');
    document.querySelector('body')?.classList.toggle('body__non-active');
  }
  
  closeDetails(event: any, id: string): void {
    const element = event.target;
    if (element.classList.contains('close') || element.classList.contains('card-fullscreen__wrapper') ) {
      document.getElementById('card-fullscreen__id-' + id)?.classList.add('card-fullscreen__wrapper__non-active');
      document.querySelector('body')?.classList.toggle('body__non-active');
    }

  }
}
