import { Component, OnInit } from '@angular/core';
import {Message, MessagesService} from '../../services/messages.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/bufferCount';
import {isURL} from 'validator';
import _ from 'lodash';

@Component({
  selector: 'app-latest-links',
  template: `
    <h2>Latest links</h2>
    <div *ngFor="let link of links">
      {{ link }}!
    </div>
  `
})
export class LatestLinksComponent implements OnInit {
  public links: string[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this
      .messageService
      .messagesList$
      .switchMap((messages: Message[]) => {
        return Observable.from([...messages].reverse())
          .map((message: Message) => message.body)
          .filter((body: any) => _.isString(body))
          .mergeMap(body => Observable.from(body.split(' ').reverse()))
          .filter((word: string) => isURL(word))

          .bufferCount(5)
          .take(1);
          // .take(5)
          // .scan((links: string[], link: string) => {
          //   links.push(link);
          //
          //   return links;
          // }, []);
      })
      .subscribe((links: string[]) => this.links = [...links].reverse());
  }

}
