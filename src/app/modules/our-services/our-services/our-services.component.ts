import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  // Adding scroll event listener
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition > 100) {
      let header = document.getElementById("header");
      if (header) {
        header.classList.add("header-scrolled");
      }
    } else if (scrollPosition < 100) {
      let header = document.getElementById("header");
      if (header) {
        header.classList.remove("header-scrolled");
      }
    }
    
  }
}
