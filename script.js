let dec=document.getElementById("dec")
let inc=document.getElementById("inc")
let clr=document.getElementById("clr")
let ct =document.getElementById("ct")
let error =document.getElementById("error")

let count=0;
inc.onclick=function(){
    if(count>=0){
        error.textContent="";
    }
    count++;
    ct.textContent=count;
}
dec.onclick=function(){
    if(count<=0){
        error.textContent="Error : Cannot go below 0";
        return 0;
    }
    else{
        count--;
    ct.textContent=count;
    }
    }
    clr.onclick=function(){
        if(count==0){
            error.textContent="";
            }
            count=0;
            ct.textContent=count;
    }
