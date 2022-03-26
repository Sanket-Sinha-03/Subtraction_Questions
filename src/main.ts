import { enableProdMode, ɵɵpureFunction3 } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { gv } from './app/app.component';
import { nq } from './app/app.component';
import { problem_1 } from './function1';
import { problem_2 } from './function2';
import { problem_3 } from './function3';
import { problem_4 } from './function4';
import { problem_5 } from './function5';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { Appfunction1 } from './function1';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// var x=gv();
// var y=nq();
// if(x!=0){
//   console.log(x);
// }
// if(y!=0){
// console.log(y);

export function fun1(x:number){
  // console.log(x);
  
}
export function fun2(a:number,b:number){
  // console.log(y)
  // if(a==0){
  //   problem_2(b);
  // }
  // let cl = new Appfunction1()
  if(a==1){
    problem_1(b)
    // problem_1(b);
  }
  else if(a==2){
    problem_2(b);
  }
  else if(a==3){
    problem_3(b);
  }
  else if(a==4){
    problem_4(b);
  }
  else if(a==5){
    problem_5(b);
  }
  //  problem_1(y);
}
// export function fun3(a:number,b:number){
//   if(a==0){
//     problem_2(b);
//   }
//   else if(a==1){
//     problem_1(b);
//   }
//   else if(a==2){
//     problem_2(b);
//   }
// }