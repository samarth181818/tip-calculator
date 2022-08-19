let count = 0;

function calculate() {

  if (count === 0){
    const bill = parseInt(document.getElementById("bill").value);
    const percent = parseInt(document.getElementById("service").value);
    const divide = parseInt(document.getElementById("people").value);
    let tip = (bill * (percent/100))/divide;
    document.getElementById("tip").textContent = Math.round(tip);

    document.getElementById("btn").textContent = "Reset";
    count++;
  }
  else{
    location.reload();
    count = 0;
  }

}
