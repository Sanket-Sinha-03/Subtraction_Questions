import { getrandom } from "./getrandomint";
import { ans } from "./answer";
import { Component } from '@angular/core';

var answ:string[]=[];
export function problem_1(n:number){
    // Function for Problem type 1
    var v=[] as number[];
    var v1=[] as number[];
    var cnt=0;
    
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

        answ.push(ans(x,y));

    }

    return answ;
}
