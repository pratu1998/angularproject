import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/admin.model';
import { AdminService } from '../services/admin.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  employees: Employee[];

  constructor(private adminservice: AdminService, private route: ActivatedRoute) { }




  ngOnInit(): void {
    this.employees= this.adminservice.onGet();

  }
  onDelet(id: Number){
    this.adminservice.onDelete(id);
  
  }

  
}
