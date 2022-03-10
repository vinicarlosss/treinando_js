function roletar(){
    limpar()
    let numeros = []
    while (numeros.length < 6){
        numero = Math.floor(Math.random() * (60-1)) + 1;
        if (numeros.length == 0){
            numeros.push(numero)
        }else{
            let counter = 0
            numeros.forEach(item => {
                if (item == numero){
                    counter += 1
                }
            });
            counter == 0 ? numeros.push(numero):console.log('número igual')
        }
    }
    numeros.map(item=>{
        let elemento = document.getElementsByClassName(item)
        elemento[0].style.backgroundColor = 'red'

    })
}

function limpar(){
    for(let i =1;i<=60;i++){
        let elemento = document.getElementsByClassName(i)
        elemento[0].style.backgroundColor = 'white'
    }
}

const BOTAO = document.querySelector("button");
BOTAO.addEventListener("click",roletar);
