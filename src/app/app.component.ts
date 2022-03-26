import { Component } from '@angular/core';
import { fun1 } from 'src/main';
import { fun2 } from 'src/main';
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
// var x:number;
// var y:number;
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
  // getval(val:string){
  //   console.warn(val)
  //   this.quetype=val;
  //   this.x=+this.quetype;
  //   fun1(this.x);
  //   // fun3(this.x);
  // }
  getnum(val:string,val1:string){
    console.warn(val)
    this.quetype=val;
    this.x=+this.quetype;
    fun1(this.x);

    console.warn(val1)
    this.numque=val1;
    this.y=+this.numque;
    let a:number;
    a=this.x;
    let b:number;
    b=this.y;
    // fun2(this.x,this.y);
    // this.router.navigateByUrl('/first-component')
    // let cl = new Appfunction1()
  if(a==1){
    this.ans=problem_1(b)
    // problem_1(b);
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
  // getfin(){
  //   fun3(this.x,this.y);
  // }
  // htmlString = <h1>{{quetype}}</h1>;
  // document.getElementById('element')?.innerHTML;
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