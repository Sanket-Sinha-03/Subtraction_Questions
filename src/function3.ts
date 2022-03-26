import { getrandom } from "./getrandomint";
import { ans } from "./answer";
// Function for Problem type 3
export function problem_3(n:number){
    var v=[] as number[];
    var v1=[] as number[];
    var cnt=0;
    var answ:string[]=[];
    while(cnt<n){
        var x=getrandom(9,99);
        var p=x/10;
        if(x%10==0 || (p%10==0)){
        }
        else{
            continue;
        }
        var y=getrandom(9,99);
        var k=y/10;
        if(y%10==0 || (k%10==0)){
        }
        else{
            continue;
        }
        var f=0,g=0;
        for(let i=0;i<v.length;i++){
            if(x==v[i] && y==v1[i]){
                f=1;
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