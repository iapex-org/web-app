import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrlUsersWeb;
  private _http = inject(HttpClient);

  verifyEmail(code: string): Observable<any> {
    let params = new HttpParams().set('code', code);
    return this._http.get<any>(`${this.apiUrl}/verify-email`, { params });
  }

  requestVerifyEmail(email: string): Observable<any> {
    let params = new HttpParams().set('email', email);
    return this._http.get<any>(`${this.apiUrl}/verify-email/request`, {
      params,
    });
  }

  registerUser(user: any): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/register`, user);
  }

  requestPasswordReset(email: string): Observable<any> {
    let params = new HttpParams().set('email', email);
    return this._http.post<any>(`${this.apiUrl}/password-reset/request`, null, {
      params,
    });
  }

  resetPassword(request: {
    verificationCode: string;
    newPassword: string;
  }): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/password-reset`, request);
  }
}
