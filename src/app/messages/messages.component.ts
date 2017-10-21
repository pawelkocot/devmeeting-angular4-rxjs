import { Component, OnInit } from '@angular/core';
import {Message, MessagesService} from '../services/messages.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-messages',
  template: `
    <app-messages-list [messages]="messages"></app-messages-list>
    <app-latest-links></app-latest-links>
    <hr />
    <app-message-form (newMessage)="send($event)"></app-message-form>
  `
})
export class MessagesComponent implements OnInit {
  public messages: Message[];

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messagesService.messagesList$
      .subscribe(messages => this.messages = messages);
  }

  public send(message: Message) {
      this.messagesService.send(message);
  }

}
