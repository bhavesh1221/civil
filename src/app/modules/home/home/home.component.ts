import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(){}

  // Adding scroll event listener
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    console.log('Scroll Position: ', scrollPosition);

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
    console.log('Scrolled more than 100px');
  }
  ngOnInit() {
    console.log('inti');
    // debugger;
  //   $(window).scroll(function() {
  //     if ($(this).scrollTop() > 100) {
  //         $('#header').addClass('header-scrolled');
  //     } else {
  //         $('#header').removeClass('header-scrolled');
  //     }
  // });
  }
}
