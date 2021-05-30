import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './global.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Login/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { RegisterComponent } from './Register/register/register.component';
import { MatIconModule } from '@angular/material';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { AdminComponent } from './admin/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule ,
    MatIconModule


  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
