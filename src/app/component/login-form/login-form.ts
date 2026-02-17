import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

import { User } from '../../model/user';
import { UserService } from '../../service/user-service/user-service';

@Component({
  selector: 'login-form',
  imports: [ ReactiveFormsModule ],
  standalone: true,
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful!', response)
          const user: User = response
          this.userService.setUser(user);
        },
        error: (err) => console.error('Login failed', err)
      });
    }
  }

  register() {
    return this.userService.register(this.loginForm.value);
  }
}