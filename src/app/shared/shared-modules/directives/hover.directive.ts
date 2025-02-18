import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }
// Capture the hover event and get the element
// Declare a variable to store the timeout reference
hideTimeout: any;

@HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
  const hoveredElement = event.target as HTMLElement;

  // Clear any pending hide operation if the user hovers again
  clearTimeout(this.hideTimeout);

  // Immediately display the element on mouse enter
  hoveredElement.getElementsByTagName('ul')[0].style.display = 'flex';

  // Make sure to reset opacity in case it was set to 0 before
  hoveredElement.getElementsByTagName('ul')[0].style.opacity = '1';
  // hoveredElement.getElementsByTagName('ul')[0].style.right = (event.clientX - 400) + 'px';
  
}

// Capture the leave event
@HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent) {
  const hoveredElement = event.target as HTMLElement;

  // Add transition effect for fading out
  hoveredElement.getElementsByTagName('ul')[0].style.transition = 'opacity 0.7s ease';

  // Set opacity to 0 for the fade-out effect
  hoveredElement.getElementsByTagName('ul')[0].style.opacity = '0';

  // Set a timeout to hide the element after 2 seconds
  this.hideTimeout = setTimeout(() => {
    hoveredElement.getElementsByTagName('ul')[0].style.display = 'none';
  }, 500); // 2 seconds delay
}
}
