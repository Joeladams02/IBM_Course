function compute() {
    var principal = document.getElementById('principal').value;

    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var amount = principal * ((1 + rate / 100) ** years);
    var result = document.getElementById('result');
    var year = new Date().getFullYear() + parseInt(years);
    if (principal <= 0) {
        window.alert('Enter a postitive definite value')
        document.getElementById("principal").focus();
    }
    else if (years <= 0) {
        window.alert('Enter a correct time period')
        document.getElementById("years").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at a compound interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will attain an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";

    }
    
}

function update_rate() {
    var rate_val = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = rate_val;
}