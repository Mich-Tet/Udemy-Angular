import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'test', content: 'xd'}];

  onAddedServer(serverData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddedBlueprint(bluePrintData: {bluePrintName:string, bluePrintContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent
    });
  }
  onChangeFirst(){
    this.serverElements[0].name = 'changed';
  }
  onDestroy(){
    this.serverElements.splice(0,1);
  }
}
