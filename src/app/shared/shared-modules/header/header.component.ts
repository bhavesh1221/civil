import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('hoverDiv') hoverDiv!: ElementRef;
  // @HostListener('mouseenter') onMouseEnter() {
  //   // this.backgroundColor = 'lightblue';
  //   console.log('Mouse entered');
  // }

  // // Detect mouseleave event
  // @HostListener('mouseleave') onMouseLeave() {
  //   // this.backgroundColor = 'lightgray';
  //   console.log('Mouse left');
  // }
  // Detect mouseenter event on child element
  // @HostListener('mouseenter', ['$event.target']) onMouseEnter(target: HTMLElement) {
  //   this.hoverDiv.nativeElement.childNodes[0].style.display = 'block'
  //   // if (target === this.hoverDiv.nativeElement) {
  //     // this.backgroundColor = 'lightblue';
  //     console.log('Mouse entered the hoverDiv');
  //   // }
  // }

  // @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
  //   const hoveredElement = event.target as HTMLElement;
  //   console.log('Hovered Element:', hoveredElement);
  //   console.log('Hovered Element ID:', hoveredElement.id);
  // }
}
