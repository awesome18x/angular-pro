import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pro';

  createUser(data: any) {
    console.log(data);
  }

  loginUser(data: any) {
    console.log(data);
  }
}
