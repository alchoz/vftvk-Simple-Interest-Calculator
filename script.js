function compute() {
    p = document.getElementById("principal").value;

    var principal = +document.getElementById("principal").value;
    var rate = +document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    interest = principal * years * rate / 100;

    var currentTime = new Date(); //gets current year
    currentDate.setFullYear(currentDate.getFullYear() + parseInt(years));
    var displayYear = currentDate.getFullYear();

    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }


    document.getElementById("result").innerHTML = 'If you deposit ' + principal + '$ ' + "<br/>" +
        'at an interest rate of ' + rate + '%. ' + "<br/>" +
        'you will recieve ' + interest + '$ ' + "<br/>" +
        'in the year of ' + displayYear;

}

function readValue() {

    var getRate = document.getElementById("rate").value;  //gets an elemnt and stores it in the variable
    var showRate = getRate;
    document.getElementById("show_rate").innerHTML = showRate + '%';

}

