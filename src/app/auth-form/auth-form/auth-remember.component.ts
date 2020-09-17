import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  template: `
  <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
  </label>
  `,
})
export class AuthRememberComponent implements OnInit {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

  // onSubmit(value: User) {
  //   this.submitted.emit(value);
  // }

}
