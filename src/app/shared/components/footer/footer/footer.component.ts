import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      button?.classList.add('show');
      button?.classList.remove('hide');
    } else {
      button?.classList.add('hide');
      setTimeout(() => button?.classList.remove('show'), 400); // Wait for animation
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
