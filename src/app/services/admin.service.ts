import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {Employee} from '../models/admin.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  employees: Employee[] = [
    {
      id: 1,
      name: "pratiksha",
      email: "prshindepatil@gmail.com",
      typeofuser: "regular",

    }
  ];

  constructor() { }
  onGet()
  {
 return this.employees;
  }
  
  onAdd(employee: Employee)
  {
    this.employees.push(employee);
  }
  onDelete(id: Number)
  {
let employee= this.employees.find(x=>x.id===id);
let index= this.employees.indexOf(employee,0);
this.employees.splice(index,1)
  }

}
