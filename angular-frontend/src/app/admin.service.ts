import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  [x: string]: any;

  private baseURL = "http://localhost:8080/api/v1/employees";
  private admin="admin"
  constructor(private httpClient: HttpClient) { }
  createAdmin(admin: Admin):Observable<Object>{

    return this.httpClient.post(`${this.baseURL}/${this.admin}`,admin);
  }
}
