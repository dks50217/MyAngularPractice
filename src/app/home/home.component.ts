import { Component } from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{
   title:string = "MSIT12016";
   sim:string ="tenor.gif";
   flag:boolean =false;
   user:object ={
     name:"Michael",
     age:25,
     sex:"male"
   }

   getvalue()
   {
     let x= 10;
     let y = 20;
     return x+y;
   }
   getobject()
   {
     let x;
     x.name = "Michael";
     x.sex ="male";
     x.age =25;
     return x;
   }
   message:string = "Michael";
   SetMessage(data:string)
   {
      this.message = data;
   }
   alertClick(evt)
   {
      console.log(evt.target)
   }
}

