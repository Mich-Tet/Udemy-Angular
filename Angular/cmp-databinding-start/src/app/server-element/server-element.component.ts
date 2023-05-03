import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('hello there constructor');
   }
   ngOnChanges(changes: SimpleChanges) {
    console.log('hello there ngOnChanges');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('hello there ngOnInit');
    console.log('Do you see view child? : '+ this.header.nativeElement.textContent);
    console.log('Do you see content child? : '+ this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('hello there ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('hello there ngAfterContentInit');
    console.log('Do you see content child? : '+ this.paragraph.nativeElement.textContent);

  }
  ngAfterContentChecked(): void {
    console.log('hello there ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('hello there ngAfterViewInit');
    console.log('Do you see view child? : '+ this.header.nativeElement.textContent);

  }
  ngAfterViewChecked(): void {
    console.log('hello there ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('hello there ngOnDestroy');

  }
}
