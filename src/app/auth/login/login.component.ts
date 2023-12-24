import { Component } from '@angular/core';
import { AuthComponent } from '../auth.component';
import { RouterModule } from '@angular/router';
import { UserPayload } from '../shared/user-payload.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['../shared/styles.css', './login.component.css'],
})
export class LoginComponent {

  login(event: UserPayload) {
    console.log(event.email, event.password);
  }
}
