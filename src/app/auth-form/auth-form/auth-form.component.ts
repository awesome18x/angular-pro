import { User } from './../auth-form.interface';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
