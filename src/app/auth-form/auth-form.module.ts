import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    AuthFormComponent
  ]
})
export class AuthFormModule { }
