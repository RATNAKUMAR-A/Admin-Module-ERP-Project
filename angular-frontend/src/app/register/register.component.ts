import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Route, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  admin: Admin = new Admin();

  constructor( private navbarService: NavbarService,private adminService : AdminService, private router:Router) {}
  ngOnDestroy(): void {
    this.navbarService.display();
  }

  ngOnInit(): void {
    this.navbarService.hide();
  }
  saveAdmin(){
    
    this.adminService.createAdmin(this.admin).subscribe(data=>{
    console.log(data);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registration Success',
      showConfirmButton: false,
      timer: 1500
    })
    this.gotoEmployeeList();

    },
    error=> alert(error.message));
  }

  gotoEmployeeList(){
      this.router.navigate(['/login']);
  }
  onSubmit(){
  console.log(this.admin);
  if(prompt("Tell the Super Admin Code")=="XYZ"){
  this.saveAdmin();
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
