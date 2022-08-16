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

        let elemento;

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




    });
}













