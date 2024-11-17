import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() col = "";
  three = false;
  two = false;
  one = false;
  ngOnInit() {
    debugger;
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

