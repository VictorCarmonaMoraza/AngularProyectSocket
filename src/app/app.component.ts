import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './serices/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularProjectSocket';
 

  constructor(private webSocketService: WebsocketService){

  }
  ngOnInit(): void {

  }

}
