import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactRequest } from '../models/contact-request.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactRequestService {
  private apiUrl = environment.apiUrlContactRequests;
  private _http = inject(HttpClient);

  getAllContactRequests(): Observable<ContactRequest[]> {
    return this._http.get<ContactRequest[]>(this.apiUrl);
  }

  getContactRequestById(id: number): Observable<ContactRequest> {
    return this._http.get<ContactRequest>(`${this.apiUrl}/${id}`);
  }

  getContactRequestsByInstitution(): Observable<ContactRequest[]> {
    return this._http.get<ContactRequest[]>(`${this.apiUrl}/me/institution`);
  }

  createContactRequest(request: ContactRequest): Observable<Response> {
    return this._http.post<Response>(this.apiUrl, request);
  }

  updateContactRequestById(id: number, request: any): Observable<Response> {
    return this._http.put<Response>(`${this.apiUrl}/${id}`, request);
  }
}
