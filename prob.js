function fak(n){
  var f = 1;
  for (var i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
}

function calculate(){
  var k = document.querySelector('input[name="K"]').value;
  var n = document.querySelector('input[name="N"]').value;
  var resultdiv = document.getElementById("result");

  var zurueck = document.getElementById("zurück").value;
  var reihenfolge = document.getElementById("reihenfolge").value;

  if(zurueck == "mZ" && reihenfolge == "Rw"){
    let result = 1/Math.pow(n, k)
    resultdiv.innerHTML = "<h3>" + result.toFixed(12) + "</h3>" + "<br>" + "Formel: P = <math xmlns='http://www.w3.org/1998/Math/MathML'>" +
    "<mfrac> 1 <msup><mn> n </mn><mn> k </mn></msup> </mfrac>";
    return false;
  }
  else if(zurueck == "mZ" && reihenfolge == "Rn"){
    let v = parseInt(n) + parseInt(k) - 1;
    let result = (fak(k)*fak(n - 1))/fak(v);
    resultdiv.innerHTML = "<h3>" + result.toFixed(12) + "</h3>" + "<br>" + "Formel: P = <math xmlns='http://www.w3.org/1998/Math/MathML'>" +
    "<mfrac> <mn> k! * (n - 1)! </mn> <mn> (n + k - 1)! </mn> </mfrac>";
    return false;
  }
  else if(zurueck == "oZ" && reihenfolge == "Rw"){
    let result = fak(n - k)/fak(n);
    resultdiv.innerHTML = "<h3>" + result.toFixed(12) + "</h3>" + "<br>" + " Formel: P = <math xmlns='http://www.w3.org/1998/Math/MathML'>" +
    "<mfrac> <mn> (n - k)! </mn> <mn> n! </mn> </mfrac>";
    return false;
  }
  else if(zurueck == "oZ" && reihenfolge == "Rn"){
    let result = fak(n - k)*fak(k)/fak(n);
    resultdiv.innerHTML = "<h3>" + result.toFixed(12) + "</h3>" + "<br>" + "Formel: P = <math xmlns='http://www.w3.org/1998/Math/MathML'>" +
    "<mfrac> <mn> (n - k)! * k! </mn> <mn> n! </mn> </mfrac>";
    return false;
  }
}
