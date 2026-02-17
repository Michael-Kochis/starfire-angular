import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { DatabaseService } from '../database-service/database-service';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSource = new BehaviorSubject<User | null>(null);
  currentUser = this.userSource.asObservable();

  user$: Observable<User | null> = this.currentUser;

  constructor(private databaseService: DatabaseService) {

  }

  clearUser(): void {
    this.userSource.next(null);
  }

  getUser(): User | null {
    return this.userSource.value;
  }

  login(userData: any): Observable<any>  {
    return this.databaseService.postHttp("auth/login", userData);
  }

  register(userData: any): Observable<any> {
    return this.databaseService.postHttp('auth/register', userData);
  }

  setUser(user: User): void {
    user.roles = (user &&user.roles) ? user.roles : "Player";
    this.userSource.next(user);
  }


}