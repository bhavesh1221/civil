import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() col = "";
  @Input() imgPath = "";
  @Input() heading = "";
  @Input() description = "";
  // @Input() imgPath = "/assets/homepage/ARCHITECTURE BIM SERVICE.png";
  three = false;
  two = false;
  one = false;

  ngOnInit() {

    console.log(this.col);
    if(this.col == 'three'){
      this.three = true;
    }
    if(this.col == 'two'){
      this.two = true;
    } 
    if(this.col == 'one'){
      this.one = true
    } 
    

}
}

