import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms'
import { Employee } from '../models/admin.model';
import { AdminService } from '../services/admin.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  header:string;
  
  constructor( private route: ActivatedRoute, private adminservice: AdminService) { }

  ngOnInit(): void {
    //this.id = +this.route.snapshot.paramMap.get('id');
    //this.header= this.id==0? 'add employee': 'edit employee';

   // if(this.id !=0){
    //  this.employee=this.adminservice.onGetEmployee(this.id);
    //}
  }
  id:Number;
  name:string="";
  email:string="";
  typeofuser:string="";
  onSubmit(form: NgForm)
  {
    let  employee: Employee={
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      typeofuser: form.value.typeofuser,
     
    }
    this.adminservice.onAdd(employee);
    


  }

}
