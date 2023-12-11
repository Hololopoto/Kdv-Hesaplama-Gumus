const cost = document.querySelector("#tutar");
const k1 = document.querySelector("#k1");
const k2 = document.querySelector("#k2");
const container = document.querySelector("body > div");
const costAlert = document.querySelector("#hr");
const alerts = document.getElementById("alert");
const x = 0.94;
console.log(alerts);
eventListeners();
function eventListeners() {
  cost.addEventListener("keyup", addCost);
  cost.addEventListener("click", addCost);
  cost.addEventListener("keyup", addK1);
  cost.addEventListener("click", addK1);
  cost.addEventListener("keyup", addK2);
  cost.addEventListener("click", addK2);
}

function addCost(e) {
  const costInput = cost.value.replace(",", ".");

  if (costInput.length > 0 && costInput.length < 2) {
    showAlert2("success", "Hesaplanıyor");
  } else if (costInput.length > 0) {
    document.getElementById("alert").style.display = "none";
  } else {
    document.getElementById("alert").style.display = "block";

    // showAlert("danger", "Lütfen Bir Tutar Giriniz");
  }
  e.preventDefault();
}

function addK1(e) {
  const costInput2 = cost.value.replace(",", ".");
  const eCarpim = costInput2 * x;
  document.querySelector("#k1").value = eCarpim.toFixed(2);
  // e.preventDefault();
}
function addK2(e) {
  const costInput3 = cost.value.replace(",", ".");
  const costK1 = k1.value;
  const cikarma = costInput3 - costK1;
  console.log(cikarma);
  document.querySelector("#k2").value = cikarma.toFixed(2);
}

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.id = "alert";
  alert.textContent = message;
  costAlert.appendChild(alert);
  //   //! Set Timeout Metodu
  // setTimeout(function () {
  //   alert.remove();
  // }, 5000);
}

//! 2. Alert İçin
function showAlert2(type, message) {
  const alert2 = document.createElement("div");
  alert2.className = `alert alert-${type}`;
  alert2.id = "alert-2";
  alert2.textContent = message;
  costAlert.appendChild(alert2);
  //   //! Set Timeout Metodu
  setTimeout(function () {
    alert2.remove();
  }, 4000);
}
