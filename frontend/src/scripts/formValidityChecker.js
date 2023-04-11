function checkPasswordMatching(pass, confpass) {
    if (pass == confpass) {
      return true;
    }
    alert("Passwords don't match")
    return false;
  }

  function checkIfAllFieldsAreFilled(formName) {
    let allAreFilled = true;
    document.getElementById(formName).querySelectorAll("[required]").forEach(function (i) {
      if (!allAreFilled) return true;
      if (i.type === "radio") {
        let radioValueCheck = false;
        document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function (r) {
          if (r.checked) radioValueCheck = true;
        })
        allAreFilled = radioValueCheck;
        return true;
      }
      if (!i.value) { allAreFilled = false; return true; }
    })
    if (!allAreFilled) {
      alert('Popuni sva polja');
      return false;
    }
    return true;
  }

  function checkPasswordRegularity(password) {
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/)) {
      alert('Password need to have ...');
      return false;
    }
    return true;
  }