const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currencySecondFirstEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const ExchangeEl = document.getElementById("exhange-rate");

updateRate()


function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/3c88889a4c4b43240404373a/latest/${currencyFirstEl.value}`).then((res)=>res.json()).then((data)=>{

    const rate = data.conversion_rates[currencySecondFirstEl.value]
    ExchangeEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondFirstEl.value}`

    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3)
})

}

currencyFirstEl.addEventListener('change', updateRate)
currencySecondFirstEl.addEventListener('change', updateRate)
worthFirstEl.addEventListener('input', updateRate)