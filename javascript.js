
//basic arithmetic functions//
const add = function(a,b){
    return a+b;
}

const subtract= function(a,b){
    return a-b;
}

const multiply= function(a,b){
    return a*b
}

const divide= function(a,b){
    if (b==0){return 'undefined '}
    else{return a/b}
}

const operate= function(operation, a,b){

    switch (operation){
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
    }

}

// referencing display into script//

let display= document.querySelector(".display"); 
let displayer=document.querySelector(".displayer");

// referencing buttons//
let digitButtons = document.querySelectorAll(".digitButton");
let clear=document.querySelector(".clear");
let deletes=document.querySelector(".delete");

let operatorButtons=document.querySelectorAll('.operatorButton');

//adding event listeners to digits//

let a;
let b;
let inputtingA=false;
 digitButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        
            if(display.textContent===" 0" || display.textContent==="0"){
                display.textContent=button.textContent;
            }else{
                display.textContent+=button.textContent;
            }
        });



    });

//adding event listeners to digits//

operatorButtons.forEach(button=>{
    button.addEventListener("click",()=>{
       
        if (b===undefined){inputtingA=!inputtingA;}
        

    if (inputtingA==true){
        console.log(a);
        if(a===undefined){
        a=+display.textContent;}
        console.log(a)
        operation=button.textContent;
         

        let lastChar = display.textContent.charAt(display.textContent.length - 1);

        if(lastChar!== "+" && lastChar!=="-" && lastChar!=="*" && lastChar!=="/"){
        
        
        
        display.textContent+=button.textContent;
        displayer.textContent=display.textContent;
        display.textContent='0';
        

        } else if(lastChar ==="+" || lastChar ==="-" || lastChar ==="*" || lastChar ==="/"){

        let newDisplay = display.textContent.slice(0, -1);
        newDisplay += button.textContent;
        display.textContent = newDisplay;
        displayer.textContent=display.textContent;
        display.textContent='0';
        }
    }else if (inputtingA==false){
        b=+display.textContent;
        
        
        display.textContent=operate(operation,a,b)
        a=+display.textContent;
        let lastChar = display.textContent.charAt(display.textContent.length - 1);

        if(lastChar!== "+" && lastChar!=="-" && lastChar!=="*" && lastChar!=="/"){

        display.textContent+=button.textContent;
        displayer.textContent=display.textContent;
        display.textContent='0';
        

        } else if(lastChar ==="+" || lastChar ==="-" || lastChar ==="*" || lastChar ==="/"){

        let newDisplay = display.textContent.slice(0, -1);
        newDisplay += button.textContent;
        display.textContent = newDisplay;
        displayer.textContent=display.textContent;
        display.textContent='0';}


        operation=button.textContent;    
        console.log(inputtingA)
    }

    

   
   
        
    
})})

clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    a=undefined;
    b=undefined;
    operation=undefined;
    inputtingA=false;
    display.textContent=' 0';
    displayer.textContent='';

})

equal=document.querySelector(".equal");


equal.addEventListener("click",()=>{
    if (a!=undefined && operation!=undefined){
        b= +display.textContent;
        let answer = operate(operation,a,b);
        console.log(answer)
        displayer.textContent=`${a} ${operation} ${b} = ${answer} `;
        display.textContent='';
    }
    
})

decimal=document.querySelector(".decimal");

decimal.addEventListener("click",()=>{
    if(display.textContent.includes('.')==false){
        display.textContent+='.';}

})


erase=document.querySelector(".erase");

erase.addEventListener("click",()=>{
    if (display.textContent!=='0'|| display.textContent!==' 0'){
        display.textContent=display.textContent.slice(0, -1);
    }
})



//adding event listeners to operators//