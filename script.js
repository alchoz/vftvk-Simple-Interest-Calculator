function compute() {
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    interest = principal * years * rate / 100;

    var currentTime = new Date(); //gets current year
    currentDate.setFullYear(currentDate.getFullYear() + parseInt(years));
    var displayYear = currentDate.getFullYear();

    
    document.getElementById("result").innerHTML = 'If you deposit ' + "<mark>"+ principal + '$ ' +"</mark>" + "<br/>" +
        'at an interest rate of ' + "<mark>"+ rate + '%. ' + "</mark>" + "<br/>" +
        'you will recieve ' + "<mark>" + interest + '$ ' + "</mark>" + "<br/>" +
        'in the year of ' + "<mark>" + displayYear + "</mark>";
    
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

}

function readValue() {

    var getRate = document.getElementById("rate").value;  //gets an elemnt and stores it in the variable
    var showRate = getRate;
    document.getElementById("show_rate").innerHTML = showRate + '%';

}

