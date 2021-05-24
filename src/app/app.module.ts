import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule, FormGroup} from '@angular/forms';
import { UserComponent } from './user/user.component';

import { DataComponent } from './data/data.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AbcComponent } from './abc/abc.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EditComponent,
    UserComponent,
    DataComponent,
    UserinfoComponent,
    AbcComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
