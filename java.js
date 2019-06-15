function sale(){
    var priceM=+document.querySelector('#price-m').textContent;
    document.querySelector("#price-6m-m").textContent='или '+priceM*0.9 +" руб";
    document.querySelector("#price-1y-m").textContent='или '+priceM*0.85 +" руб";
    document.querySelector("#price-3y-m").textContent='или '+priceM*0.7 +" руб";
}

function selectTR(){
    var tarif =document.querySelector('#trafic').value;
   var priceM;
    switch(tarif)
    {
		case '1':priceM= 300;
		break;
		
		case '2':priceM= 400;
		break;
		
		case '3':priceM= 500;
		break;
    }
    document.querySelector('#price-m').textContent=priceM;
}