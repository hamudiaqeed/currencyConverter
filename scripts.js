
    document.getElementById("convert").onclick = function (event) { 
    event.preventDefault();
    
    var valuare_el = document.getElementById("valuare").value;

    if (document.getElementById("eur").value == "EUR") {
        var rezultat = Number(valuare_el) * 4.7;
    } else {
        rezultat = Number(valuare_el) * 0.20;
    }
    console.log(rezultat);

    document.getElementById("rezultat").value = rezultat;
}
