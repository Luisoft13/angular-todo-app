import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(state => state.user),
      map((user: User | null) => {
        console.log('user', user);
        if (user) {
          return true;
        } else {
          console.log('Entro aqui')
          //this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
