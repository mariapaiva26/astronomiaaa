/* =====================================
   ASTRONOMIA DOS POVOS TUKANO
   script.js
===================================== */


/* =====================================
   MENU MOBILE
===================================== */


const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector(".navbar ul");


if(menuButton){

    menuButton.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}


// fechar menu ao clicar

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});



/* =====================================
   ROLAGEM SUAVE
===================================== */


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){

        e.preventDefault();


        const destino =
        document.querySelector(
            this.getAttribute("href")
        );


        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



/* =====================================
   MENU ATIVO NA ROLAGEM
===================================== */


const secoes =
document.querySelectorAll("section");


const links =
document.querySelectorAll(".navbar a");


window.addEventListener("scroll",()=>{


    let atual="";


    secoes.forEach(secao=>{


        const topo =
        secao.offsetTop - 150;


        const altura =
        secao.offsetHeight;


        if(
            scrollY >= topo &&
            scrollY < topo + altura
        ){

            atual =
            secao.getAttribute("id");

        }


    });



    links.forEach(link=>{


        link.classList.remove("ativo");


        if(
            link.getAttribute("href")
            === "#" + atual
        ){

            link.classList.add("ativo");

        }


    });


});



/* =====================================
   ANIMAÇÃO AO APARECER
===================================== */


const elementosAnimados =
document.querySelectorAll(
".card, .constelacao, .natureza, .evento, .animal-card"
);



const observador =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},
{

threshold:.15

});



elementosAnimados.forEach(elemento=>{


    elemento.classList.add("fade-in");


    observador.observe(elemento);


});



/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */


const topo =
document.getElementById(
"voltarTopo"
);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topo.style.display="block";


    }else{


        topo.style.display="none";


    }


});



if(topo){


topo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


}



/* =====================================
   CRIAÇÃO DE ESTRELAS
===================================== */


function criarEstrelas(){


const area =
document.createElement("div");


area.className="ceu-estrelado";


document.body.appendChild(area);



for(let i=0;i<120;i++){


    const estrela =
    document.createElement("span");


    estrela.className="estrela";


    estrela.style.left =
    Math.random()*100+"%";


    estrela.style.top =
    Math.random()*100+"%";


    estrela.style.animationDelay =
    Math.random()*5+"s";


    estrela.style.opacity =
    Math.random();



    area.appendChild(estrela);


}


}


criarEstrelas();




/* =====================================
   CONTADOR ANIMADO
===================================== */


const contadores =
document.querySelectorAll(".contador strong");



function iniciarContador(elemento){


const valor =
parseInt(elemento.innerText);



let inicio=0;



const tempo =
setInterval(()=>{


inicio += Math.ceil(valor/60);



if(inicio >= valor){

inicio=valor;

clearInterval(tempo);

}



elemento.innerText=inicio;



},30);



}



const observadorContador =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


iniciarContador(
entry.target
);


observadorContador.unobserve(
entry.target
);


}


});


});



contadores.forEach(contador=>{


observadorContador.observe(contador);


});




/* =====================================
   EFEITO PARALLAX
===================================== */


window.addEventListener(
"scroll",
()=>{


const hero =
document.querySelector(".hero");



if(hero){


let movimento =
window.scrollY * .35;



hero.style.backgroundPosition =
`center ${movimento}px`;


}



});



/* =====================================
   EFEITO NAS CONSTELAÇÕES
===================================== */


document.querySelectorAll(
".constelacao"
)
.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{


card.style.boxShadow =
"0 25px 60px rgba(217,180,74,.35)";


});



card.addEventListener(
"mouseleave",
()=>{


card.style.boxShadow =
"0 15px 35px rgba(0,0,0,.3)";


});


});



/* =====================================
   EFEITO DIGITAÇÃO NO HERO
===================================== */


const titulo =
document.querySelector(
".hero h1"
);



if(titulo){


const texto =
titulo.innerText;


titulo.innerText="";


let i=0;



function escrever(){


if(i < texto.length){


titulo.innerHTML +=
texto.charAt(i);


i++;


setTimeout(
escrever,
80
);


}


}



escrever();


}



/* =====================================
   DATA NO FOOTER
===================================== */


const ano =
new Date()
.getFullYear();



const footer =
document.querySelector("footer");



if(footer){


const p =
document.createElement("p");


p.innerHTML =
`© ${ano} - Astronomia dos Povos Tukano`;


footer.appendChild(p);


}



/* =====================================
   CONSOLE
===================================== */


console.log(
"🌌 Astronomia Tukano carregada com sucesso!"
);

console.log(
"⭐ O céu é um calendário vivo da floresta."
);