import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Message} from '../../services/messages.service';

@Component({
  selector: 'app-messages-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Messages</h2>
    <div *ngFor="let message of messages">
      <i>{{ message.sender }}</i> {{ message.body }}
      <br />
    </div>
  `
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
