import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  opensesame(widgetName){
    this.router.navigate(['/widgetName']);
  }

}
