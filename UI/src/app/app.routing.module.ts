import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { RegisterComponent } from './Register/register/register.component';

const appRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'admin', component: AdminComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
 
