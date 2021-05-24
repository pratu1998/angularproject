import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/admin.model';
import { AdminService } from '../services/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import { NgModule } from '@angular/core';
import {adlogin} from './adlogin';



import{NgForm} from '@angular/forms'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  
 adlogin: adlogin[]
 name:string="";
password:string="";



  ;
  
 onSubmit(f){
   
  if(this.name==="admin"&& this.password==="admin")
  {

  alert("login sucessful");
  this.router.navigate(['/data']);
 }
 else{
   alert("wrong Details");
 }
 }
}

