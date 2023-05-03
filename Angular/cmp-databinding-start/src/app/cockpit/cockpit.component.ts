import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{bluePrintName:string, bluePrintContent:string}>();
  newServerName = '';
  newServerContent = '';
  inputValue = '';
  inputValueContent = '';

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


  constructor() { }
  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      bluePrintName: nameInput.value,
      bluePrintContent: this.serverContentInput.nativeElement.value
    });
  }
}
