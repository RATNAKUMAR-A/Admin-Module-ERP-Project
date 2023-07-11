import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router:Router){}
  ngOnInit(): void{
    

    
  }
  saveEmployee(){
    
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
    console.log(data);
    
    this.gotoEmployeeList();

    },
    error=> Swal.fire({
      icon: 'error',
      title: 'Already Mail Registered',
      text: 'Something went wrong!',
    }));
  }

  gotoEmployeeList(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
      this.router.navigate(['/employees']);
  }
  onSubmit(){
  console.log(this.employee);
  this.saveEmployee();
  
  }
  

}
