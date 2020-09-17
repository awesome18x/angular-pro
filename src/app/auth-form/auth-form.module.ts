import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-form/auth-remember.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class AuthFormModule { }
