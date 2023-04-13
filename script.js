function calcular(event) {
    event.preventDefault();
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let imc = peso / altura**2;
    imc = imc.toFixed(2)
    document.querySelector('.calc').innerHTML = `O seu IMC é ${imc}`;
    document.querySelector('#resultado').style.display = "block";
    const elementos = document.querySelectorAll('.active');
    elementos.forEach(elemento => {
        elemento.classList.remove('active');
    });

    if (imc < 17) {
        document.querySelector('.msg').innerHTML = "Você está Muito Abaixo do Peso";
        document.querySelector('.msg').style = "font-weight: normal; color: red";
        document.querySelector('.muito-abaixo').classList.add('active');      
    } else if (imc < 18.5) {
        document.querySelector('.msg').innerHTML = "Você está Abaixo do Peso";
        document.querySelector('.msg').style = "font-weight: normal; color: orange";
        document.querySelector('.abaixo').classList.add('active');
    } else if (imc < 25) {
        document.querySelector('.msg').innerHTML = "Você está no Peso Ideal";
        document.querySelector('.msg').style = "font-weight: normal; color: green";
        document.querySelector('.peso-ideal').classList.add('active');
    } else if (imc < 30) {
        document.querySelector('.msg').innerHTML = "Você está com Sobrepeso";
        document.querySelector('.msg').style = "font-weight: normal; color: orange";
        document.querySelector('.sobrepeso').classList.add('active');
    } else if (imc < 35) {
        document.querySelector('.msg').innerHTML = "Você está Obeso";
        document.querySelector('.msg').style = "font-weight: normal; color: red";
        document.querySelector('.obesidade').classList.add('active');
    } else if (imc < 40) {
        document.querySelector('.msg').innerHTML = "Você está em Obesidade Severa";
        document.querySelector('.msg').style = "font-weight: bold; color: red;";
        document.querySelector('.obesidade-severa').classList.add('active');
    } else if (imc >= 40) {
        document.querySelector('.msg').innerHTML = "Você está em Obesidade Mórbida";
        document.querySelector('.msg').style = "font-weight: bold; color: black;"
        document.querySelector('.obesidade-morbida').classList.add('active');
    }
    document.querySelector('#tabela').style.display = "table";
    document.querySelector('.button-reset').style.display = "block";
}

function resetar() {
    let button = document.querySelector('.button-reset');
    let tabela = document.querySelector('#tabela');
    let resultado = document.querySelector('#resultado');

    button.style.display = "none";
    tabela.style.display = "none";
    resultado.style.display = "none";
}

document.getElementById('formulario').addEventListener('submit', calcular);
