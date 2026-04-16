let pin = "";
const correct = "2429";

/* ENTER NUMBER */
function press(num) {
  if (pin.length < 4) {
    pin += num;
    updateUI();
  }
}

/* UPDATE BOXES */
function updateUI() {
  for (let i = 0; i < 4; i++) {
    document.getElementById("d" + (i + 1)).innerText = pin[i] || "";
  }
}

/* CLEAR */
function clearPin() {
  pin = "";
  updateUI();
}

/* CHECK PASSWORD */
function checkPin() {
  if (pin === correct) {
    document.getElementById("nextBtn").classList.remove("hidden");
    document.getElementById("error").innerText = "";
  } else {
    wrong();
  }
}

/* WRONG */
function wrong() {
  document.getElementById("error").innerText =
    "Achoo!! Its wrong sweetheart😭";

  document.querySelector(".container").classList.add("shake");

  setTimeout(() => {
    document.querySelector(".container").classList.remove("shake");
  }, 300);

  clearPin();
}