import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  // templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  template: `<app-server></app-server>
  <div>Awesome</div>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
