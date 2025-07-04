import { Component, HostListener } from '@angular/core';
// import {  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(){}

  bim_outsourcing = {
    h1tag: "BRINGING YOUR IDEAS TO LIFE WITH EXCELLENCE AND EXPERTISE",
    spantag: "DELIVERING TOP-NOTCH BIM REVIT MODELING SERVICES WITH A FOCUS ON EXCEPTIONAL QUALITY, RAPID TURNAROUND TIMES, AND A COLLABORATIVE, CLIENT-CENTERED APPROACH.",
    ptag: "Our Revit BIM Modeling Services encompass a wide range of offerings, including BIMArchitectural Modeling, Architectural Drafting, 3D Rendering, Structural Modeling and Detailing(such as rebar and precast), MEP-FP Modeling and Detailing, BIM Coordination and ClashDetection, Revit Family Creation, Point Cloud to BIM Conversion, CAD to BIM Services, preciseShop Drawing Development, As-built Drawings, and more."
  } 
  // OUR BIM OUTSOURCING SERVICE OFFERINGS - cards
  // ARCHITECTURE BIM SERVICEVIDEOOUR

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
        // header.classList.add("");
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
  ngOnInit() {
    //code to show run vision
    // const txt:any = document.getElementById('vision')
    //     const prog = "Elevating Visions to New Height"	;
    //     let indx = 1;
    //     function writeText(){
    //         txt.innerText = prog.slice(0,indx)
    //         indx++;
    //         if(indx>prog.length){
    //             indx=1;
    //         }
    //     }
    //     setInterval(writeText,150)
    //code to show run vision

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
