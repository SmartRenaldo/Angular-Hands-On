import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  username = ''

  constructor() { }

  ngOnInit(): void {
  }

  getUsername() {
    return this.username
  }

  isEmpty() {
    return this.username == null || this.username == ''
  }

}
