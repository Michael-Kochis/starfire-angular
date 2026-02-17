import { Component } from '@angular/core';
import { RegisterForm } from "../../component/register-form/register-form";

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [RegisterForm],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

}
