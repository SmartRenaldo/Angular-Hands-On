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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1500)
  }

  ngOnInit(): void {
  }


  onCreateServer() {
    if (this.serverCreationStatus == 'No server was created!!!') {
      this.serverCreationStatus = 'A server was created~'
      return
    }

    this.serverCreationStatus = 'A server was created~' + '<br>' + this.serverCreationStatus
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
