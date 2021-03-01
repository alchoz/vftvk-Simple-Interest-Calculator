function compute() {
    p = document.getElementById("principal").value;

    var principal = +document.getElementById("principal").value;
    var rate = +document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var currentTime = new Date().getFullYear(); //gets current year


     interest = principal * years * rate / 100;
   


    document.getElementById("result").innerHTML = 'If you deposit ' + principal + '$ '+ "<br/>"+
        'at an interest rate of ' + rate + '%. ' + "<br/>"+
        'you will recieve ' + interest  + '$ ' +"<br/>"+
        'in the year of ' + currentTime;

}

function readValue() {

    var getRate = document.getElementById("rate").value;  //gets an elemnt and stores it in the variable
    var showRate = getRate;
    document.getElementById("show_rate").innerHTML = showRate + '%';

}

