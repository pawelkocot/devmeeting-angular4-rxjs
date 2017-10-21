import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

export interface Message {
  body: string;
  sender: string;
  timestamp: number;
}

@Injectable()
export class MessagesService {
  private messagesDb: AngularFireList<any>;
  public messagesList$: Observable<Message[]>;

  constructor(private db: AngularFireDatabase) {
    this.messagesDb = this.db.list('messages');
    this.messagesList$ = this.messagesDb.valueChanges();
  }

  send(message: Message) {
    this.messagesDb.push(message).then(() => console.log('message added'));
  }
}
