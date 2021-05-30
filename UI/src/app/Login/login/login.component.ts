import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private globalService: GlobalService) { }

  onClickSubmit(user) {
    console.log("Form Data :", user.username, user.password);
    this.globalService.authenticateUser(user).subscribe();
    
 }

}
