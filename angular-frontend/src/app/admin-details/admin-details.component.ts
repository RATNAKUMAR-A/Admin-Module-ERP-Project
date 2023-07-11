import { Component } from '@angular/core';
import { Admin } from '../admin';
import { ActivatedRoute, Route } from '@angular/router';
import { AdminService } from '../admin.service';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {
  [x: string]: any;
  id !: number;
  admin !: Admin;
  admins: Admin[] | undefined;
  searchText!:any;
  constructor(private route:ActivatedRoute, private adminService:AdminService,private employeeService: EmployeeService){
  }

  ngOnInit():void{
    this.getAdmins();
}
  public getAdmins() {
    this.employeeService.getAllAdmins().subscribe(data => {
      this.admins = data; 
      console.log(this.admins)
    });
  }
  deleteAdmin(id:number){
    if(prompt("Tell the Super Admin Code")=="XYZ"){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          {
            this.employeeService.deleteAdmin(id).subscribe(data => {
        
              console.log(data);
              
              this.getAdmins();
            });
          }
          Swal.fire(
            'Deleted!',
            'Your Data has been deleted.',
            'success'
          )
        }
      })
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

