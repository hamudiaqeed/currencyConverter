function replaceFunc() {
    var elem1 =  document.getElementById("eur").value;
    var elem2 =  document.getElementById("ron").value;

    if (elem1 == 'EUR') {
        document.getElementById("eur").value = "RON";
        document.getElementById("moneda").value = "EUR";
        document.getElementById("bnr").innerHTML = "<span>1 RON = 0.20 EUR</span>";
    }
    if (elem2 == "RON"){
        document.getElementById("ron").value = "EUR";
        
    }

    if (elem1 == 'RON') {
        document.getElementById("eur").value = "EUR";
        document.getElementById("moneda").value = "RON";
        document.getElementById("bnr").innerHTML = "<span>1 EUR = 4.7635 RON</span>";
    }
    
    if (elem2 == "EUR"){
        document.getElementById("ron").value = "RON";
        
    }
}