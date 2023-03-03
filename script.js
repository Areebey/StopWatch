// start here
const clock=document.querySelector(".clock");

let sec=0,
min=0,
hur=0,
intervalId;

const startWatch = () =>{
intervalId = setInterval(() => {
    if(sec<59){
        sec++;
    }else if(min>=59){
        min=0;
        hur++;
    }
    else{
        sec=0;
        min++;
    }
const seccond=String(sec).padStart(2,"0");
const minute=String(min).padStart(2,"0");
const hour=String(hur).padStart(2,"0");

clock.innerText=hour+":"+minute+":"+seccond;

    // console.log(hour+":"+minute+":"+seccond);
}, 1000);
};

const stopeWatch = () =>{
clearInterval(intervalId);
};