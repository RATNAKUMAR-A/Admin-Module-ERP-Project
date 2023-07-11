import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { NavbarService } from '../navbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  getData!: number;
  model: any = {};
  
 

  constructor(
    private router: Router, private employee: EmployeeService, private navbarService: NavbarService

   
  ) {}
  ngOnDestroy(): void {
    this.navbarService.display();
  }

  ngOnInit(): void {
    this.navbarService.hide();
  }

  loginUser() {
   

    var user = this.model.username;
    var password = this.model.password;

     
    this.employee.getUserData(user, password)
      .subscribe((res: any) => {
        this.getData = res;
        console.log(res);

        if (this.getData == 1) {
          this.router.navigate(["/home"])
          sessionStorage.setItem("username","password");
          
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login Credentials is Wrong',
          })

         
        }
        
      },
      (error) => {
        alert("Invalid username or Password");
      }
        );
}
fp(){
  if(prompt("Tell the Super Admin Code")=="XYZ"){
    this.router.navigate(["/forgotpassword"])
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