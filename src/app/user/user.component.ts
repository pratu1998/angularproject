import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { DataComponent } from '../data/data.component';
import { EditComponent } from '../edit/edit.component';
import { Employee } from '../models/admin.model';
import{AdminService} from '../services/admin.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private adminservice: AdminService, private router:Router) { }
  employees: Employee[]
  ngOnInit(): void {
  }
  name:string="";
  password:string="";
  email:string="";
  onSubmit(form: NgForm)
  {
if(this.name==="pratiksha" && this.password==="pratiksha" )

{
  alert("login sucess");
  this.router.navigate(['/userinfo']);
  
}
else if(this.name==="abc" && this.password==="abc"){
  alert("login sucess");
  this.router.navigate(['/abc']);

}
else{
  alert("wrong user");
}

  }

}
