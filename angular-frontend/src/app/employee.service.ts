import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  private baseURL = "http://localhost:8080/api/v1/employees";
  private countVar="count";
  private adminVar="admin";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
   
  createEmployee(employee: Employee):Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }
  updateEmployee(id:number, employee : Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }
  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  delAll(): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteall`);
  }
  public count(){
    return this.httpClient.get(`${this.baseURL}/${this.countVar}`)
  }

  getUserData(username: string,password: string){
    return this.httpClient.get(`${this.baseURL}/${username}/${password}`);
  }
  
  getAllAdmins(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}/admins`);
  }

  updateAdmin(id:number, employee : Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${this.adminVar}/${id}`,employee);
  }
  getAdminById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${this.adminVar}/${id}`);
  }
  deleteAdmin(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${this.adminVar}/${id}`);
  }
}
