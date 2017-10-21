import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from './services/messages.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {ReactiveFormsModule} from '@angular/forms';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { LatestLinksComponent } from './messages/latest-links/latest-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessagesListComponent,
    MessageFormComponent,
    LatestLinksComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    MessagesService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
