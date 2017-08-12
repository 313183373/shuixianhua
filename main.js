function shuixianhua(){
    for(let i=100;i<1000;i++){
        let arr=[];
        let n=i;
        while(n){
            arr.push(n%10);
            n=Math.floor(n/10);
        }
        if(arr.reduce((pre,now,arr)=>pre+now**3,0)===i){
            console.log(i);
        }
    }
}

shuixianhua();