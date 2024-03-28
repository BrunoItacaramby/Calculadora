function meuEscopo() {
    const form = document.querySelector('.form')
    const dados = {}
    let imcTexto
    const resultado = document.getElementById('resultado')

    function recebeEventoForm(evento) {
        const peso = document.querySelector('#peso')
        const altura = document.querySelector('#altura')

        dados.peso = peso.value
        dados.altura = (altura.value / 100)

        if(isNaN(peso.value)){
            resultado.innerHTML = `<h2>Insira valores numéricos em "Peso"</h2>`
            resultado.style.display = 'block'
            resultado.style.backgroundColor = 'rgb(236, 66, 66)' // vermelho 
        }else{

        const imc = (dados.peso / (dados.altura ** 2)).toFixed(1)

        if (imc < 18.5) {
            imcTexto = 'Abaixo do peso'
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            imcTexto = 'Peso normal'
        }
        else if (imc >= 25 && imc <= 29.9) {
            imcTexto = 'Sobrepeso'
        }
        else if (imc >= 30 && imc <= 34.9) {
            imcTexto = 'Obesidade grau 1'
        }
        else if (imc >= 35 && imc <= 39.9) {
            imcTexto = 'Obesidade grau 2'
        }
        else {
            imcTexto = 'Obesidade grau 3'
        }

        if (dados.peso == '' && dados.altura == '') {
            resultado.innerHTML = `<h2>Preencha os campos para realizar o cálculo do IMC</h2>`
            resultado.style.backgroundColor = 'rgb(236, 66, 66)' // vermelho
        }
        else if (dados.peso == '') {
            resultado.innerHTML = `<h2>O campo "Peso" não pode estar em branco</h2>`
            resultado.style.backgroundColor = 'rgb(236, 66, 66)' // vermelho
        }
        else if (dados.altura == '') {
            resultado.innerHTML = `<h2>O campo "Altura" não pode estar em branco</h2>`
            resultado.style.backgroundColor = 'rgb(236, 66, 66)' // vermelho
        }
        else if (imc < 18.5 || imc >= 30) {
            resultado.innerHTML = `<h2>Seu IMC é ${imc} (${imcTexto})</h2>`
            resultado.style.backgroundColor = 'rgb(236, 66, 66)' // vermelho
        }
        else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `<h2>Seu IMC é ${imc} (${imcTexto})</h2>`
            resultado.style.backgroundColor = 'rgb(236, 154, 66)' // vermelho
        }
        else {
            resultado.innerHTML = `<h2>Seu IMC é ${imc} (${imcTexto})</h2>`
            resultado.style.backgroundColor = 'rgb(66, 236, 117)' // verde
        }
        }
        resultado.style.display = 'block'
        evento.preventDefault()
    }
    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()