import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Subscription, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  getData:any;
  showNavbar:boolean=true;
  subscription!: Subscription;
  constructor(private navbarServices: NavbarService, private router: Router){
    this.subscription=this.navbarServices.showNavbar.subscribe((value)=>{
      this.showNavbar=value;
    })
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  logout(){
    if(prompt("Type Logout to Exit the Session")=="LOGOUT" || "logout" || "Logout"){
      sessionStorage.removeItem("username");
      this.router.navigate(["/login"])
      
    }
    
  }
}
