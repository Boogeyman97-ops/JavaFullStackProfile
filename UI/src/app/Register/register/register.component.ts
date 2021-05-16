import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [GlobalService]
})
export class RegisterComponent implements OnInit {

  constructor(private globalService: GlobalService, private router: Router) { }

  onClickSubmit(user) {
    this.globalService.addUser(user);
    console.log("Form Data", user.email, user.password, user.mobile);
 }

  ngOnInit() {
    
  }

}
