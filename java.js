function sale(){
    var priceM=+document.querySelector('#price-m').textContent;
    document.querySelector("#price-6m-m").textContent='или '+priceM*0.9 +" руб";
    document.querySelector("#price-1y-m").textContent='или '+priceM*0.85 +" руб";
    document.querySelector("#price-3y-m").textContent='или '+priceM*0.7 +" руб";
}

function select(){
    var tarif =document.querySelector('#trafic')
}