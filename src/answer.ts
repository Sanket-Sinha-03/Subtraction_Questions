export function ans(x:number,y:number): string{
    
    var z:string=x.toString();
    var ans:string = "";
    ans += z;
    ans += ' '
    ans += '-'
    ans += ' ';
    
    var k:string=y.toString();
    
    ans += k;
    ans += ' '
    ans += '= blank'
    ans += ' '
    return ans;
    
}