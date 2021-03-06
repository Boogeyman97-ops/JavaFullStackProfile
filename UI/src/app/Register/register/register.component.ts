import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [GlobalService]
})
export class RegisterComponent{

  constructor(private globalService: GlobalService, private router: Router) { }

  onClickSubmit(user) {
    this.globalService.addUser(user).subscribe();
    console.log("Form Data 1", user.email, user.password, user.mobile);
 }
}
