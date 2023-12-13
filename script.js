const alturaA = document.querySelector('#alturaA')
const larguraA = document.querySelector('#larguraA')
const quantidadeA = document.querySelector('#quantidadeA')

const alturaB = document.querySelector('#alturaB')
const larguraB = document.querySelector('#larguraB')
const quantidadeB = document.querySelector('#quantidadeB')

const resultado = document.querySelector('#resultado')

const enviar = document.querySelector('#enviar').addEventListener('click', ()=>{
    const areaA = (alturaA.value*larguraA.value)*quantidadeA.value
    const areaB = (alturaB.value*larguraB.value)*quantidadeB.value
    
    const lata = document.querySelector('#completo18')
    const galao = document.querySelector('#completoGL')
    const quarto = document.querySelector('#completoQuartinho')

    const lataTexto = document.querySelector('#completo18 p')
    const galaoTexto = document.querySelector('#completoGL p')
    const quartoTexto = document.querySelector('#completoQuartinho p')

    const checkboxPorta = document.querySelector('#porta')
    const checkboxJanela = document.querySelector('#janela')

    const porta = 1.8
    const janela = 1.2

    const total = areaA+areaB
    if (checkboxPorta.checked) {
        console.log(total - porta )
    } else {
        
    }

    if (total > 0) {
        resultado.innerHTML = `Você tem ${total.toFixed(2)}m²`
    } else {
        resultado.innerHTML = ''
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
        const lataUnidade = total / 130
        lata.style.display = 'flex'
        lataTexto.innerHTML = `Você vai precisar de ${Math.ceil(lataUnidade)} unidade de 18 litros de tinta`

    } else {
        lata.style.display = 'none'
    }


    alturaA.value = ''
    alturaB.value = ''
    larguraA.value = ''
    larguraB.value = ''
    quantidadeA.value = ''
    quantidadeB.value = ''
})
