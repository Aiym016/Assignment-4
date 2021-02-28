alert ("Bride's qalyn calculator")


let func=[]
let price = 1500; //The starting bid


function Name () {
    var name= document.getElementById("Name").textContent; //Bride's name
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function netWorth() { //Bride's family net worth
    var selectedValue = document.getElementById("2").value;
    switch (selectedValue) { 
        case "2.1": price *= 2; break;
        case "2.2": price *= 1.5; break;
        case "2.3": price *= 1.2; break;
    }                                                                                                           
}

function Skills () {
    var skills= document.getElementById(skills).nodeValue;
  var arr = [1500]  //Bride's skills
  var result = arr.reduce(function(sum, current) {
    return sum * current;
  }, 0);
  alert( result );

  let skills1 = document.getElementById(skills1).checked;
  if (skills){
      arr.reduce(document.getElementById(skills1).value);
  }
  let skills2 = document.getElementById(skills2).checked;
  if (skills){
      arr.reduce(document.getElementById(skills2).value);
  }
  let skills3 = document.getElementById(skills3).checked;
  if (skills){
      arr.reduce(document.getElementById(skills3).value);
  }
  let skills4 = document.getElementById(skills4).checked;
  if (skills){
      arr.reduce(document.getElementById(skills4).value);
}
}

function education() {
    //Bride's education
    var selectedValue = document.getElementById("1").value;
    switch (selectedValue) {
        case "1.1": price *= 1.5; break;
        case "1.2":  price *= 1.2;  break;
        case "1.3":  price *= 1.05; break;
        case "1.4": price *= 0.9; break;
                                                                                                                           
    }
}

function age () { //Bride's age
var age= document.getElementById(age).value;

let between= documemt.getElementById("Betweeen 18-23").checked;
  if (between18) {
      arr.reduce(document.getElementById("between18-23").value);
  }

let between24= document.getElementById("between24-27").checked;
  if (between24) {
      arr.reduce(document.getElementById("between24-27").value);
  }

let moreThan28 = document.getElementById("28+").checked;
  if (morethan28) {
      arr.reduce(document.getElementById("28+").value);
  }
}

function reputation(a) { //Bride's reputation
    if (a == 0.85 || a == 0.9) {
        price *= a;
    }
    else {
        price -= a;
    }}



document.getElementById("Calculate Price").onclick = function () { alert('Total price'); };


 




























