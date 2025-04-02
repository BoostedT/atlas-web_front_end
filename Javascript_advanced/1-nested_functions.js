var globalvariable =  "Welcome";

function outer() {
  alert(globalvariable); // Accessing global variable

  var course = "Holberton";

  function inner() {
    alert(globalvariable + " " + course);

    var exclamation = "!";

    function inception() {
      alert(globalvariable + " " + course + exclamation);
    }
      inception();
    }
    inner();
  }
  outer();
