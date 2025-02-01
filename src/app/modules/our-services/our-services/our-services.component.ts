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
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.layoutData = data.filter(item => item.id == this.itemId);
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
        console.log(element);
        (element as HTMLElement).style.color = "black";
      });
      let header = document.getElementById("header");
      if (header) {
        header.classList.remove("header-scrolled");
        header.classList.add("white-bg");

      }
    }
    
  }

}
