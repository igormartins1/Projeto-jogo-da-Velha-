let x =document.querySelector(".x");
let o =document.querySelector(".o");

let boxer=document.querySelectorAll(".box");

let buttons=document.querySelectorAll("#buttons-container button");

let messageContainer=document.querySelector("#message");

let messageText=document.querySelector("#message p");

let secondPlayer;


// contador de jogadas 

let player1=0;
let player2=0;

// adicionando o evento de click ao boxes 

for(let i=0; i<boxer.length;i++){
    //quando alguem clica na caixa 
    boxer[i].addEventListener("click",function(){

        let elemento=checkEl(player1,player2);

        if(player1==player2){
            // x
            elemento=x;
        } else{
            //0
            elemento=o;
        }

        //Verifica se já tem x ou o

        if(this.childNodes.length==0){
            
        let cloneElemento=elemento.cloneNode(true); // clonar o elemento 

        this.appendChild(cloneElemento);

        //computar jogada

        if(player1==player2){
            player1++;
        }else{
           player2++; 
        }
    } 
    
    //Checar quem venceu 

    checkinCondicional();

        

    });
}

//ver qem vai jogar 

function checkEl(player1,player2){
    if(player1==player2){
        //x
        elemento=x;
    }else{
        //o
        elemento=o;
    }
    return elemento;
}

//ver quem ganhou 

function checkinCondicional(){
    let b1=document.getElementById("block-1")
    let b2=document.getElementById("block-2")
    let b3=document.getElementById("block-3")
    let b4=document.getElementById("block-4")
    let b5=document.getElementById("block-5")
    let b6=document.getElementById("block-6")
    let b7=document.getElementById("block-7")
    let b8=document.getElementById("block-8")
    let b9=document.getElementById("block-9")

    if(b1.childNodes.length>0 && b2.childNodes.length>0 && b3.childNodes.length>0){
        let b1child=b1.childNodes[0].className;
        let b2child=b2.childNodes[0].className;
        let b3child=b3.childNodes[0].className;

        if(b1child=='x' && b2child=='x' && b3child=='x'){
            //Quando o x venceu 

        } else if(b1child=='o' && b2child=='o' && b3child=='o'){
            // Quando o o venceu
        }
    }

    
    if(b4.childNodes.length>0 && b5.childNodes.length>0 && b6.childNodes.length>0){
        let b4child=b4.childNodes[0].className;
        let b5child=b5.childNodes[0].className;
        let b6child=b6.childNodes[0].className;

        if(b4child=='x' && b5child=='x' && b6child=='x'){
            //Quando o x venceu 
            console.log('x venceu');

        } else if(b4child=='o' && b5child=='o' && b6child=='o'){
            // Quando o o venceu
            console.log('o venceu');
        }
    }







}













