import { Component,OnInit,ViewChild,ElementRef, asNativeElements} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx'
import { count } from 'rxjs';
import Swal from 'sweetalert2';

declare var window:any;
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  [x: string]: any;


  employees: Employee[] | undefined;
  count!: any;
  formModal:any;
  employee!: Employee;
  employeenew!: Employee;
  id!: any;
  searchText!:any;
  id2!:number;
  employee2!:Employee;

  
  constructor(private employeeService: EmployeeService , private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getEmployees();
    this.getCountEmployees();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    // this.openModal(this.id);
    
  }

  public sweetAlert(id:number){
    this.id=id;
    this.employee=new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee);
      Swal.fire(`ID : ${this.employee.id} | Name : ${this.employee.fname} ${this.employee.lname} | Mail : ${this.employee.mail} | 
      Mobile : ${this.employee.mobile} | DOB : ${this.employee.dob} | Role :${this.employee.role} | Address :${this.employee.address} 
      `)
      
      

   });
    
  }

  public getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data; 
    });
    this.employeeService.count().subscribe(data => {
      this.count = data;
    });
  }

  private getCountEmployees(){
    this.employeeService.count().subscribe(data => {
      this.count = data;
    });
  }
 
   delAll(){
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
          this.employeeService.delAll().subscribe(data => {
          
            console.log(data); 
          });
          window.location.reload();
          let hi:string = "Disabled";
        }
        Swal.fire(
          'Deleted!',
          'Your Entire Data has been deleted.',
          'success'
        )
      }
    })

  }
  updateEmployee(id:number){
      this.router.navigate(['update-employee',id])
  }
  deleteEmployee(id:number){
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
          this.employeeService.deleteEmployee(id).subscribe(data => {
      
            console.log(data);
            
            this.getEmployees();
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
employeeDetails(id : number){
  this.router.navigate(['employee-details',id])
}
employeeViewDetails(id : number){
  this.router.navigate(['employee-details',id])
}

@ViewChild("table")table!: ElementRef
exporttoexcel(){
  const workbook = XLSX.utils.table_to_book(this.table.nativeElement);
  XLSX.writeFile(workbook,'admin.xlsx');
}
}
function openFormModal() {
  throw new Error('Function not implemented.');
}

function saveSomeThing() {
  throw new Error('Function not implemented.');
}

function openModal() {
  throw new Error('Function not implemented.');
}

