var peso;
var altura; 
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);
    
    
    
    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + 'br/> Cuidado você está muito abaixo do peso!'
    }else if(imc > 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + 'br/> Cuidado você está abaixo do peso!'

    }else if(imc >= 18.5 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + 'br/> Você está no peso ideal'
    }else if(imc > 25 && imc <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + 'br/> Você está acima do peso!'
    }
    else if( imc > 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + 'br/> Cuidado Obesidade!'
    }

    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value = '';
}