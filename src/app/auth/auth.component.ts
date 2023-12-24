import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Submit, FormLabel } from './auth.types';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserPayload } from './shared/user-payload.model';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  @Output()
  onSubmitEvent = new EventEmitter<UserPayload>();
  @Input()
  submitType: Submit;
  @Input()
  submitLabel: FormLabel;
  @Input()
  formHeaderLabel: FormLabel;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  private getRequiredError(): string {
    return 'You must enter a value';
  }

  private getInvalidError(propName: string): string {
    return `Not a valid ${propName}`;
  }

  private getMinLengthError(propName: string): string {
    return `Too short ${propName}`;
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return this.getRequiredError();
    }
    return this.email.hasError('email') ? this.getInvalidError('email') : '';
  }

  getUsernameError() {
    if (this.username.hasError('required')) {
      return this.getRequiredError();
    }
    return this.username.hasError('minlength')
      ? this.getMinLengthError('username')
      : '';
  }

  getPasswordError() {
    if (this.password.hasError('required')) {
      return this.getRequiredError();
    }
    return this.password.hasError('minlength')
      ? this.getMinLengthError('password')
      : '';
  }

  onSubmit(): any {
    this.onSubmitEvent.emit({
      username: this?.username?.value ?? '',
      email: this.email.value!,
      password: this.password.value!,
    });
  }

  formHasAnyErrors(): boolean {
    return (
      this.email.invalid ||
      this.password.invalid ||
      (this.submitType === 'signup' && this.username.invalid)
    );
  }
}
