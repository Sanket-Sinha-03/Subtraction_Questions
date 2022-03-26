import { Component } from '@angular/core';
// import { fun1 } from 'src/main';
// import { fun2 } from 'src/main';
// import { Appfunction1 } from 'src/function1';
import { Router } from '@angular/router';
import { problem_1 } from 'src/function1';
import { problem_2 } from 'src/function2';
import { problem_3 } from 'src/function3';
import { problem_4 } from 'src/function4';
import { problem_5 } from 'src/function5';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showQuestions = true;
  title = 'Subtraction Questions';
  quetype="";
  numque="";
  x=0;
  y=0;
  ans:any[] = [];
  constructor(){

  }
  
  getnum(val:string,val1:string){
    console.warn(val)
    this.quetype=val;
    this.x=+this.quetype;
    // fun1(this.x);

    console.warn(val1)
    this.numque=val1;
    this.y=+this.numque;
    let a:number;
    a=this.x;
    let b:number;
    b=this.y;
    // checking the problem type and passing the value to the corresponding functions
  if(a==1){
    this.ans=problem_1(b)
    
  }
  else if(a==2){
    this.ans=problem_2(b);
  }
  else if(a==3){
    this.ans = problem_3(b);
  }
  else if(a==4){
    this.ans = problem_4(b);
  }
  else if(a==5){
    this.ans = problem_5(b);
  }
  this.showQuestions = false;
  }
  
}

export function gv(){
  let  ab=new AppComponent();
  var f=ab.x;
  console.log(f);
  return f;
}
export function nq(){
  let  abc=new AppComponent();
  var k=abc.y;
  return k;
}