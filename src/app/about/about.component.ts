import { Component } from '@angular/core';

@Component({
    selector:'about',
    templateUrl:'./about.component.html',
    styleUrls:['./about.component.css']
})
export class AboutComponent{
   title:string = "關於我們"
   date = new Date();
   users =[
        {"name":"Michael","age":25,"sex":"male"},
        {"name":"Tommy","age":55,"sex":"male"},
        {"name":"Amy","age":35,"sex":"female"},
        {"name":"Ash","age":25,"sex":"female"}
   ]
   isShow:boolean = false;
   Countries = ["TW","US","JP","Kor","CN"];
   StartCountry:string = "US";
}
