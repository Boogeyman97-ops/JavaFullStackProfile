import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatIconModule} from '@angular/material';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './global.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Login/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { RegisterComponent } from './Register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule 
    // MatIconModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
