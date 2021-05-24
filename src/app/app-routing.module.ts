import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import {UserComponent} from './user/user.component';
import {DataComponent} from './data/data.component';
import{UserinfoComponent} from './userinfo/userinfo.component'
import { AbcComponent } from './abc/abc.component';


 
const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path:'edit', component: EditComponent},
  { path:'edit', component: EditComponent},
  {
    path:'user', component: UserComponent

  },
  { path:'data', component: DataComponent},

  { path:'userinfo', component: UserinfoComponent},
  
  { path:'abc', component: AbcComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
