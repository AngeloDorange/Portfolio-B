

function validateForm() {
    let email = document.forms["valid"]["mail"].value;

    let message = document.forms["valid"]["messa"].value;

    if (email == "") {
      document.getElementById("validate").innerHTML = "Email must be filled out";
      return false;
    }
    else{
        
    }

    if (message < 50) {
        document.getElementById("valida").innerHTML = "Please fill message to 50 characters or more!";
        return false;
    }
}
