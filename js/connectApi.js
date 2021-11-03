const urlBase = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/6/modelos/5549/anos/';
let ano = 2011;

const getDataApi = (url) =>{
    fetch(url)
    .then(function (response) {
        document.querySelector('#err').textContent ="";
        return response.json();
    })
    .then(function (data) {
        document.querySelector('.modelo').textContent= data.Modelo;
        document.querySelector('#ano').textContent = data.AnoModelo;
        document.querySelector('#combustivel').textContent = data.Combustivel;
        document.querySelector('#valor').textContent = data.Valor;
        document.querySelector('#referencia').textContent = data.MesReferencia;
        document.querySelector('.img').src= `./img/${data.AnoModelo}.jpg`;
        document.querySelector('.img').alt=`Modelo ${data.AnoModelo}`;
        console.log(data)})
    .catch(error =>{ 
        document.querySelector('#err').textContent ="Não tem conexão à API " + error})
}
setInterval(()=>{
    let url = urlBase + ano + '-1';
    
    getDataApi(url);
    ano++;
    ano= ano > 2018 ? 2011 : ano;
},4000)
//connectApi('https://parallelum.com.br/fipe/api/v1/carros/marcas/6/modelos/5549/anos/2012-1')