import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../our-services/services.enum';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  itemId:any = 0;
  layoutData:any = [];
  cards = [
    { img: 'https://via.placeholder.com/300x200', title: 'Card 1' },
    { img: 'https://via.placeholder.com/300x200', title: 'Card 2' },
    { img: 'https://via.placeholder.com/300x200', title: 'Card 3' },
    { img: 'https://via.placeholder.com/300x200', title: 'Card 4' },
    { img: 'https://via.placeholder.com/300x200', title: 'Card 5' },
    { img: 'https://via.placeholder.com/300x200', title: 'Card 6' }
  ];

  currentIndex = 0;
  intervalId: any;
  spanWidth = 0;
  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.layoutData = data.filter(item => item.id == this.itemId);
    this.startAutoSlide();
    // imp code to find out length of words to put underline on service heading
    const getTextWidth = (text:string,font:string) => {
       let canvas = document.createElement('canvas');
       let context = canvas.getContext('2d');
        if (!context) {
          console.error("2D context is not supported or failed to initialize.");
          return;
        }
       context.font = font;
       let metrics = context.measureText(text);
       this.spanWidth = metrics.width;
       console.log(this.spanWidth);
     }
    getTextWidth(this.layoutData[0].view1heading, "24px system-ui");
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
  // Adding scroll event listener
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    let aTags: HTMLCollectionOf<Element> = document.getElementsByClassName('change-color');
    if (scrollPosition > 100) {

      Array.from(aTags).forEach((element) => {
        (element as HTMLElement).style.color = "black";
      });
      let header = document.getElementById("header");
      if (header) {
        header.classList.add("");
        // header.classList.remove("white-bg");
        
      }
    } else if (scrollPosition < 100) {
      Array.from(aTags).forEach((element) => {

        (element as HTMLElement).style.color = "black";
      });
      let header = document.getElementById("header");
      if (header) {
        header.classList.remove("header-scrolled");
        header.classList.add("white-bg");

      }
    }
    
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    if (this.currentIndex < this.cards.length - 3) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Reset to first card when reaching the end
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cards.length - 3; // Jump to last visible cards
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 33.33}%)`;
  }

}
