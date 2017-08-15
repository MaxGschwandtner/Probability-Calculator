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
  // var z = document.querySelector('input[name="Z"]').value;
  var resultdiv = document.getElementById("result");

  var zurueck = document.getElementById("zurück").value;
  var reihenfolge = document.getElementById("reihenfolge").value;

  if(zurueck == "mZ" && reihenfolge == "Rw"){
    let result = 1/Math.pow(n, k)
    resultdiv.innerHTML = "<h3>" + result + "</h3>";
    return false;
  }
  else if(zurueck == "mZ" && reihenfolge == "Rn"){
    var v = parseInt(n) + parseInt(k) - 1;
    let result = 1/(fak(v)/(fak(k)*fak(n - 1)));
    resultdiv.innerHTML = "<h3>" + result + "</h3>";
    return false;
  }
  else if(zurueck == "oZ" && reihenfolge == "Rw"){
    let result = 1/(fak(n)/fak(n - k));
    resultdiv.innerHTML = "<h3>" + result + "</h3>";
    return false;
  }
  else if(zurueck == "oZ" && reihenfolge == "Rn"){
    let result = 1/(fak(n)/(fak(n - k)*fak(k)));
    resultdiv.innerHTML = "<h3>" + result + "</h3>";
    return false;
  }
}
