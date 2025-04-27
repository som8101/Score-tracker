const p1=document.querySelector('#btn1');
const p2=document.querySelector('#btn2');
const p1display=document.querySelector('#one');
const p2display=document.querySelector('#two');
const reset=document.querySelector('#reset');
const tar=document.querySelector('#cars');

let scr1=0;
let scr2=0;
let win=0;
let isOn=false;
tar.addEventListener('change',function(){
    win=parseInt(this.value);
})
p1.addEventListener('click',function(){
    if(!isOn){
        scr1++;
        p1display.innerText=scr1;
    }
    if(scr1===win){
        isOn=true;
        p1display.style.color="green";
        p2display.style.color="red";
    }
})
p2.addEventListener('click',function(){
    if(!isOn){
        scr2++;
        p2display.innerText=scr2;
    }
    if(scr2===win){
        isOn=true;
        p2display.style.color="green";
        p1display.style.color="red";
    }
})
reset.addEventListener('click',function(){
   scr1=0;
   scr2=0;
   p1display.textContent=scr1;
   p2display.textContent=scr2;
   tar.value=1;
   isOn=false;
   p2display.style.color="black";
   p1display.style.color="black";
})