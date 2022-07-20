import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!!!';
  serverName = 'Testserver';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1500)
  }

  ngOnInit(): void {
  }


  onCreateServer() {
    this.serverCreated = true
    if (this.serverCreationStatus == 'No server was created!!!') {
      this.serverCreationStatus = 'A server was created~ The name is ' + this.serverName
      return
    }

    this.serverCreationStatus = this.serverCreationStatus + '<br>' + 'A server was created~ The name is ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
