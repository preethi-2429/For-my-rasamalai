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
/* 📖 GO TO PAGE 2 */
function goPage2() {
  document.getElementById("book").classList.add("flip");
}

/* ⬅ BACK */
function goBack() {
  document.getElementById("book").classList.remove("flip");
}

/* ➡ GO TO PAGE 3 */
function goNext() {
  document.getElementById("page2").style.transform = "rotateY(-180deg)";
  document.getElementById("page3").style.transform = "rotateY(0deg)";
}
/* ⬅ BACK TO PAGE 2 */
function backToPage2() {
  document.getElementById("page2").style.transform = "rotateY(0deg)";
  document.getElementById("page3").style.transform = "rotateY(180deg)";
}

/* 🎁 OPEN GIFT */
function openGift(num) {
  if (num === 1) {
    alert("Gift 1 (Letter) coming 💌");
  }
  if (num === 2) {
    alert("Gift 2 (Cake) coming 🎂");
  }
  if (num === 3) {
    alert("Gift 3 (Messi) coming ⚽");
  }
}