import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = "";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidCredentials = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }

  handleClick(){
    if(this.userName==="Malsha" && this.password==="dummy"){
      //redirect to the welcome page
      this.router.navigate(['welcome', this.userName]);
    }
    
    else 
    this.invalidCredentials = true;
  console.log(this.userName);
  
  }
}
