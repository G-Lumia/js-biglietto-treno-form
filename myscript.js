// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// dichiarazione variabili 

const travelFee = 0.21;
const youngDiscount = 20;
const oldDiscount = 40;

document.getElementById("myTicket").addEventListener("submit", function(event) 
{
    event.preventDefault();
    kmTrip = document.getElementById("kmTrip").value;
    age = document.getElementById("userAge").value;
    let price = (kmTrip * travelFee).toFixed(2);
    let finalPrice;
    let discount;

    // ciclo per controllare se i valori inseriti sono corretti
    if( (isNaN(age)) || (parseInt(age) <= 0) || (parseInt(age) > 110) || (isNaN(kmTrip)) || (parseInt(kmTrip) <= 0))
    {
        console.log("I dati inseriti non sono corretti: riprova.") ;
    }

    // cicli per verificare se l'utente potrà avere o meno uno sconto in base alla propria età
    else
    {
    if(parseInt(age) < 18)
    {
        discount = (price / 100 * youngDiscount).toFixed(2);
        finalPrice = price - discount;
        document.getElementById("discount-alert").innerHTML = `<h4 class="text-success"> Hai diritto ad uno sconto del 20%!</h4>`;
        document.getElementById("discount").innerHTML = ` -${discount}euro`;
    }
    if(parseInt(age) > 65) 
    {
        discount = price / 100 * oldDiscount;
        finalPrice = price - discount;
        document.getElementById("discount-alert").innerHTML = `<h4 class="text-success"> Hai diritto ad uno sconto del 40%! </h4> `;
    }
    if((parseInt(age) >= 18)&&(parseInt(age) <= 65))
    {
        document.getElementById("discount-alert").innerHTML = `<h4 class="text-danger"> Nessuno sconto applicabile </h4> `;
        document.getElementById("ticketCost").innerHTML = ` ${price} euro`;  
    }
    else
    {
        document.getElementById("ticketCost").innerHTML = `${finalPrice} euro`;
        document.getElementById("originalPrice").innerHTML = `Costo iniziale del biglietto: ${price} euro`; 
        document.getElementById("discount").innerHTML = `Sconto applicato: ${discount} euro`;  
    }
        document.getElementById("myKm").innerHTML = ` ${kmTrip}km`;
        document.getElementById("myAge").innerHTML = ` ${age}`;
        document.getElementById("ticket").classList.remove("d-none");
    }
});