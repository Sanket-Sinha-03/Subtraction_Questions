export function getrandom(mi:number,ma:number){
    mi = Math.ceil(mi);
	ma = Math.floor(ma);
	return Math.floor(Math.random() * (ma - mi + 1)) + mi; 
}