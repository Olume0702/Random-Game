'use strict'


let btn = document.querySelector('.btn1')
let play =document.querySelector('.play')
const heading = document.querySelector('.homescore')
const heading1 = document.querySelector('.guestscore')
heading.innerText=0
heading1.innerText=0
play.innerHTML= 'Let Play'

btn.addEventListener('click',function(){
    let random =Math.ceil(Math.random()*20);
    heading.innerText=random
    let random1 =Math.ceil(Math.random()*20);
    heading1.innerText=random1;

    if(heading.innerText>heading1.innerText){
        play.innerText='VEE wins 😈';

    }else if (heading.innerText < heading1.innerText){
        play.innerText = 'TEE wins 👹'
        
    }else {
        play.innerText = 'ts a Tie ❌';
    }
}
)