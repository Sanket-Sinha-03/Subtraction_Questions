export function ans(x:number,y:number): string{
    var s:string[] = [];
    var z:string=x.toString();
    var ans:string = "";
    ans += z;
    ans += ' '
    ans += '-'
    ans += ' ';
    s.push(z);
    s.push('-');
    var k:string=y.toString();
    s.push(k);
    ans += k;
    ans += ' '
    ans += '= blank'
    ans += ' '
    return ans;
    s.push(" = blank");
    // return s;
}