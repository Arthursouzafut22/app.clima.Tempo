const key = "1f3c92c01bef47d11ad0c6d7f17872c7";
const grAus = document.querySelector(".graus");
const senSacao = document.querySelector(".sensacao");
const humiDade = document.querySelector(".humidade-2");
const veloCidade = document.querySelector(".num-velocidade");

async function buscarCidade(inputCidade) {
  const climaTempo = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCidade}&appid=${key}`
  )
  const rececerTempo = await climaTempo.json();

  grAus.innerText = Math.floor(rececerTempo.main.temp);
  veloCidade.innerText = rececerTempo.wind.speed;
  senSacao.innerText = rececerTempo.main.pressure;
  humiDade.innerText = rececerTempo.main.humidity;
};

const buscarClima = () => {
  const inputCidade = document.getElementById("buscarCidade").value;
  buscarCidade(inputCidade);
};

