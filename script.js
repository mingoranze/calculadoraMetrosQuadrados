const altura = document.querySelector('#altura')
const largura = document.querySelector('#largura')
const quantidade = document.querySelector('#quantidade')

const portaValue = document.querySelector('#porta')
const janelaValue = document.querySelector('#janela')

const resultado = document.querySelector('#resultado')

const porta = 1.8
const janela = 1.2
const enviar = document.querySelector('#enviar').addEventListener('click', ()=>{
    const area = ((altura.value*largura.value)*quantidade.value) - (janelaValue.value*janela) - (portaValue.value*porta)

    
    const lata = document.querySelector('#completo18')
    const galao = document.querySelector('#completoGL')
    const quarto = document.querySelector('#completoQuartinho')

    const lataTexto = document.querySelector('#completo18 p')
    const galaoTexto = document.querySelector('#completoGL p')
    const quartoTexto = document.querySelector('#completoQuartinho p')

    
    
    
    let total = area
    



    if (total > 0) {
        resultado.style.display = 'flex'
        resultado.innerHTML = `Você tem ${total.toFixed(2)}m²`
    } else {
        resultado.style.display = 'none'
    }

    if (total <= 10 && total > 0) {
        const quartoUnidade = total / 5

        quarto.style.display = 'flex'
        quartoTexto.innerHTML = `Você vai precisar de ${Math.ceil(quartoUnidade)} unidade de 900ml de tinta`
    }else {
        quarto.style.display = 'none'
    }

    if (total > 10 && total <= 60) {
        const galaoUnidade = total / 20
        galao.style.display = 'flex'
        galaoTexto.innerHTML = `Você vai precisar de ${Math.ceil(galaoUnidade)} unidade de 3,6 de tinta`

    } else {
        galao.style.display = 'none'
    }

    if (total > 60) {
        const lataUnidade = total / 100
        lata.style.display = 'flex'
        lataTexto.innerHTML = `Você vai precisar de ${Math.ceil(lataUnidade)} unidade de 18 litros de tinta`

    } else {
        lata.style.display = 'none'
    }


    altura.value = ''
    largura.value = ''
    quantidade.value = ''
    portaValue.value = ''
    janelaValue.value = ''
})
