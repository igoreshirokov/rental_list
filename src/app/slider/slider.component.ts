import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import SwiperCore from 'swiper';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  @Input() images: any;
  swiper: any;
  activeIndex$: any = new Subject();
  thumbs: any = [];



  constructor() { 
    this.activeIndex$.subscribe({
      next: (v: any) => {
        this.thumbUpdate(v)
      }
    })
  }


  ngOnInit() {
   
  }

  onSwiper(swiper: any) {
    // console.log(swiper);
    this.swiper = swiper;
    this.activeIndex$.next(swiper.activeIndex);
  }

  onSlideChange() {
    this.activeIndex$.next(this.swiper.activeIndex);
    
  }

  changeSlide(index: any) {
    this.swiper.slideTo(index);
  }

  thumbUpdate(activeIndex: any) {

    this.thumbs = this.images.map((image: string, index: number) => {
      const isActive = index == activeIndex;
      return {
        id: index,
        src: image,
        isActive: isActive
      }
    })
  }


}
