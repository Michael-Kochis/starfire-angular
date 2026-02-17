import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private apiUrl = 'http://localhost:8080/api/v1/'

  constructor(private http: HttpClient, private router: Router) {}

  public getHttp(target: string, data: any): Observable<any> {
    console.log('AuthService GET request to: ' + this.apiUrl + target);
    if (!data) {
      return this.http.get(this.apiUrl + target)
    } else {
      return this.http.get(this.apiUrl + target, data)
    }
  }

  public logout() {
    sessionStorage.removeItem('auth_token')
    sessionStorage.removeItem('user')
    this.router.navigate(['login'])
  }

  public postHttp(target: string, data: any): Observable<any> {
    return this.http.post(this.apiUrl + target, data)
  }
  
}