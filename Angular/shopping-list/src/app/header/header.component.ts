import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() whatSelected = new EventEmitter<string>();

  onClick(selected:string){
    this.whatSelected.emit(selected);
  }
}
