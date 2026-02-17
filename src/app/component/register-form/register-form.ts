import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { UserService } from '../../service/user-service/user-service';

@Component({
  selector: 'register-form',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    // Initialize the form with fields and basic validation
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Access form values and send to the service
      this.userService.register(this.registerForm.value).subscribe({
        next: (response) => console.log('Registration successful!', response),
        error: (err) => console.error('Registration failed', err)
      });
    }
  }

  register() {
    return this.userService.register(this.registerForm.value);
  }
}