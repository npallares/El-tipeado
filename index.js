const $btn = document.querySelectorAll(".btn");
const $score = document.getElementById("score")
const $btnEmpezar = document.getElementById("btn-empezar")
const $reiniciar = document.getElementById("reiniciar")
let contador = 30
let number = 0;
let score = 0;

//Función que elige tecla de manera aleatoria
const setnumber = ()=>{
   number=Math.round(Math.random()*(60-0+1)+0)  // Guardado de numero aleatoreo en variable number
}



// Función que ilumina las teclas
const iluminate = ()=>{   
    if(contador != 0) $btn[number].classList.add("active"); // evita iluminar letra al temrinar el conteo
    
    else return;
}


// Listener del teclado
document.addEventListener("keydown",(e)=>{
    e.preventDefault();
    let tecla = e.key;

    // IF creado para evitar mal funcionamiento, si está el Bloq Mayus Activado.
    if(e.key.length == 1){
        tecla = (e.key).toLowerCase()
    }

    // compara la tecla presionada y la tecla iluminada, si esta OK repite proceso y aumenta el score.
    if(tecla == $btn[number].id){
        $btn[number].classList.remove("active");
        score ++;
        $score.innerHTML=`Score: ${score}`
        setnumber();
        iluminate();

    }
})

//******************************************************


// Comportamiento del boton COMENZAR

$btnEmpezar.addEventListener("mouseover",(e)=>{
    $btnEmpezar.classList.add("btn-empezar-hover")
})

$btnEmpezar.addEventListener("mouseout",(e)=>{
    $btnEmpezar.classList.remove("btn-empezar-hover")
})

$btnEmpezar.addEventListener("click",(e)=>{
    
    
    // Evalua el contador para evitar el mal funcionamiento
    
    if(contador === 30){
        
        setnumber()
        iluminate()

        $btnEmpezar.classList.add("btn-active")        
        
        let countdown = setInterval(() => {
            contador -- ; // resta de a 1 al contador
            $btnEmpezar.textContent=contador; // muestra tiempo restante o contador

            if(contador == 0){
                clearInterval(countdown) // detiene el contador
                $btnEmpezar.textContent=`Aciertos : ${score}`; // muestra Score acumulado
                $btnEmpezar.classList.remove("btn-active"); // Remuebe la clase del $btn
                $reiniciar.classList.remove("dis-none")
                $btn[number].classList.remove("active")
                
            }

        }, 500);
    
    } else {
        return;
    }

})

console.log($reiniciar)

$reiniciar.addEventListener("click",(e)=>{

    contador=30;
    $reiniciar.classList.add("dis-none")
    setnumber()
    iluminate()

    if(contador === 30){
        
        $btnEmpezar.classList.add("btn-active")        
        
        let countdown = setInterval(() => {
            contador -- ; // resta de a 1 al contador
            $btnEmpezar.textContent=contador; // muestra tiempo restante o contador

            if(contador == 0){
                clearInterval(countdown) // detiene el contador
                $btnEmpezar.textContent=`Aciertos : ${score}`; // muestra Score acumulado
                $btnEmpezar.classList.remove("btn-active"); // Remuebe la clase del $btn
                $reiniciar.classList.remove("dis-none")
                
            }

        }, 500);
    
    } else {
        return;
    }
    
})
