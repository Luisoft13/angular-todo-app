import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app.actions';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.state';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

const VALID_USERNAME = 'test01';
const VALID_PASSWORD = 'test01';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('buttonAnimation', [
      state('idle', style({
        transform: 'scale(1)'
      })),
      state('clicked', style({
        transform: 'scale(0.9)'
      })),
      transition('idle <=> clicked', animate('200ms ease-out'))
    ])
  ]
})

export class LoginComponent {
  username = '';
  password = '';
  buttonState = 'idle';
  showAlert = false;
  passwordVisible = false;

  constructor(private store: Store<AppState>, private router: Router) {}

  login() {
    const user: User = { username: this.username, password: this.password };
    this.store.dispatch(AppActions.login({ user }));
    this.buttonState = 'clicked';

    setTimeout(() => {
      if (this.username === VALID_USERNAME && this.password === VALID_PASSWORD) {
        this.router.navigate(['/todo']);
      } else {
        this.showAlert = true
      }
    }, 500);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
