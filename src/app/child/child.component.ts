import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData:string; 
  @Output() result = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  count = 0;
  increment(){
    this.count++;
    this.result.emit(this.count);
  }

}
