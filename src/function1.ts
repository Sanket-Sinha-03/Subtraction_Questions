import { getrandom } from "./getrandomint";
import { ans } from "./answer";
import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './final.html',
//   styleUrls: [ './final.css' ]
// })
// export class Appfunction1{
//      answ:string[]=[];
//     problem_1(n:number){
//         var v=[] as number[];
//         var v1=[] as number[];
//         var cnt=0;
//         // var answ:string[]=[];
//         while(cnt<n){
//             var x=getrandom(5,12);
//             if(x==10){
//                 continue;
//             }
//             var y=getrandom(5,12);
//             if(y==10){
//                 continue;
//             }
//             var f=0,g=0;
//             for(let i=0;i<v.length;i++){
//                 if(x==v[i] && y==v1[i]){
//                     f=1;
//                 }
//             }
//             // for(let i=0;i<v1.length;i++){
//             //     if(y==v1[i]){
//             //         g=1;
//             //     }
//             // }
//             if(f==1){
//                 continue;
//             }
            
//             if(x<y){
//                 var temp=x;
//                 x=y;
//                 y=temp;
//             }
//             cnt++;
//             v.push(x);
//             v1.push(y);
//             // answ=ans(x,y);
//             console.log(ans(x,y));
//             this.answ.push(ans(x,y));
//             // this.answerarr = answ;
//             // return answ;
//             // htmlString = '<h1>{answ}</h1>';
            
//             // const app = document.getElementById("app");
//             // if(app != null){
//             //     app.textContent = ans(x,y);
//             // }
//         }
//         // this.answerarr = answ; 
//         // console.log(this.answerarr);
//         return this.answ;
//     }
// }
var answ:string[]=[];
export function problem_1(n:number){
    var v=[] as number[];
    var v1=[] as number[];
    var cnt=0;
    // var answ:string[]=[];
    while(cnt<n){
        var x=getrandom(5,12);
        if(x==10){
            continue;
        }
        var y=getrandom(5,12);
        if(y==10){
            continue;
        }
        var f=0,g=0;
        for(let i=0;i<v.length;i++){
            if(x==v[i]){
                if(y==v1[i]){
                    f=1;}
            }
        }
        // for(let i=0;i<v1.length;i++){
        //     if(y==v1[i]){
        //         g=1;
        //     }
        // }
        if(f==1){
            continue;
        }
        
        if(x<y){
            var temp=x;
            x=y;
            y=temp;
        }
        cnt++;
        v.push(x);
        v1.push(y);
        // answ=ans(x,y);
        // console.log(ans(x,y));
        answ.push(ans(x,y));
        // this.answerarr = answ;
        // return answ;
        // htmlString = '<h1>{answ}</h1>';
        
        // const app = document.getElementById("app");
        // if(app != null){
        //     app.textContent = ans(x,y);
        // }
    }
    // this.answerarr = answ; 
    // console.log(this.answerarr);
    return answ;
}
// export function problem_1(n:number){
//     var v=[] as number[];
//     var v1=[] as number[];
//     var cnt=0;
    
//     while(cnt<n){
//         var x=getrandom(5,12);
//         if(x==10){
//             continue;
//         }
//         var y=getrandom(5,12);
//         if(y==10){
//             continue;
//         }
//         var f=0,g=0;
//         for(let i=0;i<v.length;i++){
//             if(x==v[i] && y==v1[i]){
//                 f=1;
//             }
//         }
//         // for(let i=0;i<v1.length;i++){
//         //     if(y==v1[i]){
//         //         g=1;
//         //     }
//         // }
//         if(f==1){
//             continue;
//         }
        
//         if(x<y){
//             var temp=x;
//             x=y;
//             y=temp;
//         }
//         cnt++;
//         v.push(x);
//         v1.push(y);
//         var answ:string[]=[];
//         answ=ans(x,y);
//         console.log(ans(x,y));
//         // return answ;
//         // htmlString = '<h1>{answ}</h1>';
        
//         // const app = document.getElementById("app");
//         // if(app != null){
//         //     app.textContent = ans(x,y);
//         // }
//     }
//     return "xy";
// }

// export class Appfun1  {
//   htmlString = '<h1>Hello gowtham</h1>';
// }
// export function problem_1(n:number){
//     var v=[] as number[];
//     var v1=[] as number[];
//     var cnt=0;
    
//     while(cnt<n){
//         var x=getrandom(5,12);
//         if(x==10){
//             continue;
//         }
//         var y=getrandom(5,12);
//         if(y==10){
//             continue;
//         }
//         var f=0,g=0;
//         for(let i=0;i<v.length;i++){
//             if(x==v[i] && y==v1[i]){
//                 f=1;
//             }
//         }
//         // for(let i=0;i<v1.length;i++){
//         //     if(y==v1[i]){
//         //         g=1;
//         //     }
//         // }
//         if(f==1){
//             continue;
//         }
        
//         if(x<y){
//             var temp=x;
//             x=y;
//             y=temp;
//         }
//         cnt++;
//         v.push(x);
//         v1.push(y);
//         var answ:string[]=[];
//         answ=ans(x,y);
//         // return answ;
//         // htmlString = '<h1>{answ}</h1>';
//         console.log(ans(x,y));
//     }
// }
