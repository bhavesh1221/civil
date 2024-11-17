import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-img',
  templateUrl: './content-img.component.html',
  styleUrls: ['./content-img.component.scss']
})
export class ContentImgComponent {
  @Input() bim_outsourcing = {h1tag: "", ptag: "", spantag: ""}

}
