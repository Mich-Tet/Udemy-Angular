import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddN: number[] = [];
  evenN: number[] = [];
  onCounterStarted(counterNum: number){
    if(counterNum % 2 === 0){
      this.evenN.push(counterNum);
    }else{
      this.oddN.push(counterNum);
    }
  }
}
