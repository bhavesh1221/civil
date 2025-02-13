import { Component,DoCheck,Input, SimpleChanges } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements DoCheck {
  @Input() col = "";
  @Input() imgPath = "";
  @Input() heading = "";
  @Input() description = "";
  @Input() calledFrom = "";
  // @Input() routePath = "";
  
  // @Input() imgPath = "/assets/homepage/ARCHITECTURE BIM SERVICE.png";
  three = false;
  two = false;
  one = false;


  ngOnInit() {

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

  ngDoCheck(): void {
    // if(this.calledFrom == "our projects"){
      
    // }
  }
}

