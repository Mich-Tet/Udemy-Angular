import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked:boolean = false;
  hello:string = "Secret pass = tuna";
  where:string = 'beforeF';
  something = [];
  constructor() {
  }
  ngOnInit(): void {}
  onClickButton(){
    this.clicked = !this.clicked;
    // this.something.push(this.something.length + 1);
    this.something.push(new Date());
  }
}
