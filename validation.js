validateForm = (event) =>{
    event.preventDefault();

    const uname = document.getElementById('username')
    const passw = document.getElementById('password')

    if(uname === ""){
        alert("Username is required.");
        return false;
    }

    if (passw === "") {
        alert("Password is required.");
        return false;
    }

    if (passw.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    window.location.href = "./CurrencyConverter/currency.html";
    return true;
}