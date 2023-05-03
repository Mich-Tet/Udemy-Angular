import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{

  counter: number = 0;
  interval: any;
  @Output() counterStarted = new EventEmitter<number>();


  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  onStart(){
    this.interval = setInterval(() => {
      this.counterStarted.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }
  onStop(){
    clearInterval(this.interval);
  }
}
