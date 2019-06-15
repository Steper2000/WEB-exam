function sale(){
    var priceM=+document.querySelector('#price-m').textContent;
    document.querySelector("#price-6m-m").textContent=priceM;
    document.querySelector("#price-1y-m").textContent=priceM*0.85;
    document.querySelector("#price-3y-m").textContent=priceM*0.7;
}