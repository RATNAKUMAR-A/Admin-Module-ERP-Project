import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
    ngOnInit(): void {
      this.id=230502;
      this.employeeService.getAdminById(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
    }
    
    onSubmit(){
      this.employeeService.updateAdmin(this.id, this.employee).subscribe( data =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Password Updated Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.goToEmployeeList();
      }
      , error => alert("error"));
    }
  
    goToEmployeeList(){
      this.router.navigate(['/login']);
    }
    onClick(){
      if(prompt("Tell the Super Admin Code")=="XYZ"){
        this.onSubmit();
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Go and Get the Code from Super Admin',
            footer: 'Secret Code Doesnt Match'
          })
          
        }
    }
  }
  

