const btnUno = document.getElementById('btnX1')
const btnDos = document.getElementById('btnX2')
const btnTres = document.getElementById('btnX3')
const btnCuatro = document.getElementById('btnX4')
const btnCinco = document.getElementById('btnX5')
const btnSeis = document.getElementById('btnX6')
const btnSiete = document.getElementById('btnX7')
const btnOcho = document.getElementById('btnX8')
const btnNueve = document.getElementById('btnX9')
const winner = document.querySelector('.ganador')

var a =0;
var contador = 0;

function tateti(boton){
    if (a == 0){
        a = a+1;
        boton.value = "X"
        boton.disabled = true;
        
        console.log(a)
    }
    else {
        a = a-1;
        boton.value = "O"
        boton.disabled = true;
        console.log(a);
    }

    contador++
    console.log(contador)


    validarGanadores();
}

function validarGanadores () {

    //horizontal X parte arriba
    if (btnUno.value == 'X' && btnDos.value == 'X' && btnTres.value =='X'){
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 
    } else {
        validarEmpate();
    } 
    
    //horizontal X parte abajo
    if (btnSiete.value == 'X' && btnOcho.value == 'X' && btnNueve.value =='X'){
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 

    }
    

    //vertical X lado izquierdo
    if (btnUno.value == 'X' && btnCuatro.value == 'X' && btnSiete.value =='X'){

        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 
       
    }

    //vertical X lado derecho
    if (btnTres.value == 'X' && btnSeis.value == 'X' && btnNueve.value =='X'){
        
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 

    }

    //diagonal X
    if (btnUno.value == 'X' && btnCinco.value == 'X' && btnNueve.value =='X'){
        
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 

    }

    //diagonal inversa X

    if (btnTres.value == 'X' && btnCinco.value == 'X' && btnSiete.value =='X'){
        
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 

    }

    //medio vertical X
    if (btnDos.value == 'X' && btnCinco.value == 'X' && btnOcho.value =='X'){
       
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 

    }

    //medio horizontal X
    if (btnCuatro.value == 'X' && btnCinco.value == 'X' && btnSeis.value =='X'){
    
        winner.innerHTML = "El ganador es X"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
       },2000) 

    }


    //Ahora lo hacemos para el circulo

    //horizontal parte arriba
    if (btnUno.value == 'O' && btnDos.value == 'O' && btnTres.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 
    }
    //horizontal O parte abajo
    if (btnSiete.value == 'O' && btnOcho.value == 'O' && btnNueve.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;

       },2000) 
    }

    //vertical O lado izquierdo
    if (btnUno.value == 'O' && btnCuatro.value == 'O' && btnSiete.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;
       },2000) 
    }

    //vertical O lado derecho
    if (btnTres.value == 'O' && btnSeis.value == 'O' && btnNueve.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;
       },2000) 
    }

    //diagonal O
    if (btnUno.value == 'O' && btnCinco.value == 'O' && btnNueve.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;
       },2000) 
    }

    //diagonal inversa
    if (btnTres.value == 'O' && btnCinco.value == 'O' && btnSiete.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;
       },2000) }
    

    //medio vertical O
    if (btnDos.value == 'O' && btnCinco.value == 'O' && btnOcho.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        contador = 0;
        a=0;
       },2000) 
    }


    //medio O horizontal
    if (btnCuatro.value == 'O' && btnCinco.value == 'O' && btnSeis.value =='O'){
        winner.innerHTML = "El ganador es O"
        setTimeout(()=>
       {
        btnUno.value = ""
        btnDos.value = ""
        btnTres.value = ""
        btnCuatro.value = ""
        btnCinco.value = ""
        btnSeis.value = ""
        btnSiete.value = ""
        btnOcho.value = ""
        btnNueve.value = ""
        //habilitar botones
        btnUno.disabled = false;
        btnDos.disabled = false;
        btnTres.disabled = false;
        btnCuatro.disabled = false;
        btnCinco.disabled = false;
        btnSeis.disabled = false;
        btnSiete.disabled = false;
        btnOcho.disabled = false;
        btnNueve.disabled = false;
        //borrar mensaje innerHTML
        winner.innerHTML = '';
        //reiniciar contador
        a=0;

       },2000) 
    }
    return
}

function validarEmpate () {
    if( contador == 9) {

        winner.innerHTML = "Hubo un empate" 
        setTimeout(()=>{
    btnUno.value = ""
    btnDos.value = ""
    btnTres.value = ""
    btnCuatro.value = ""
    btnCinco.value = ""
    btnSeis.value = ""
    btnSiete.value = ""
    btnOcho.value = ""
    btnNueve.value = ""
    //habilitar botones
    btnUno.disabled = false;
    btnDos.disabled = false;
    btnTres.disabled = false;
    btnCuatro.disabled = false;
    btnCinco.disabled = false;
    btnSeis.disabled = false;
    btnSiete.disabled = false;
    btnOcho.disabled = false;
    btnNueve.disabled = false;
    //borrar mensaje innerHTML
    winner.innerHTML = '';
    a=0;
    contador = 0;
        },2000)

    }
}