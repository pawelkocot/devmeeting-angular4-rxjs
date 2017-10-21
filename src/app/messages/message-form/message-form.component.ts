import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../services/messages.service';

@Component({
  selector: 'app-message-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submitForm()">
      <div>
        <label>Name</label>
        <input type="text" [formControlName]="'sender'" />
      </div>
      <div>
        <label>Message</label>
        <input type="text" [formControlName]="'body'" />
      </div>
      <div>
        <button type="submit" [disabled]="form.invalid">Send</button>
      </div>
    </form>
  `
})
export class MessageFormComponent implements OnInit {
  public form: FormGroup;
  @Output() newMessage = new EventEmitter<Message>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      sender: ['Paweł', Validators.required],
      body: ['', Validators.required]
    });
  }

  submitForm() {
    const {sender, body} = this.form.value;

    this.newMessage.next({
        sender,
        body,
        timestamp: +new Date()
    });
    this.form.controls['body'].reset();
  }

}
