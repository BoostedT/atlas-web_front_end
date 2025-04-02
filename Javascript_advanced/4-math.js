function divideBy(firstnumber) {
  return function (secondnumber) {
    return secondnumber / firstnumber;
  };
}
function addBy(firstnumber) {
  return function (secondnumber) {
    return firstnumber + secondnumber;
  };
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
