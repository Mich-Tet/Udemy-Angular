import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'xddx';
  servers = ['xddx',"xddx2"];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);

  }

  ngOnInit(): void {}

  onCreateServer(){
    this.serverCreationStatus = 'Server was created. Name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  userName:string = '';
  userNamex:string = '';
  onClickName(){
    this.userName = '';
  }
}
