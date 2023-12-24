import { Component } from '@angular/core';
import { AuthComponent } from '../auth.component';
import { UserPayload } from '../shared/user-payload.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: '../shared/styles.css',
})
export class SignUpComponent {
  
  signUp(event: UserPayload) {
    console.log(event.email, event.password);
  }
}
