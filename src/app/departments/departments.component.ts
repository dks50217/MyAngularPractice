import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  depId:number = 0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {    
    // this.depId = 20;
    this.route.params.subscribe(p => {this.depId = p.no})
  }

}
