import { User } from './auth-form/auth-form.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pro';

  createUser(data: User) {
    console.log(data);
  }

  loginUser(data: User) {
    console.log(data);
  }

  rememberUser(data: boolean) {
    console.log(data);
  }
}
