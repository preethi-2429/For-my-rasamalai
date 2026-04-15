let code = "";

function press(num) {
  if (code.length < 4) {
    code += num;
    updateDots();
  }
}

function updateDots() {
  document.getElementById("dots").innerHTML = "●".repeat(code.length);
}

function clearCode() {
  code = code.slice(0, -1);
  updateDots();
}

function submitCode() {
  if (code === "2429") {
    document.getElementById("lockscreen").classList.add("hidden");
    document.getElementById("giftpage").classList.remove("hidden");
  } else {
    document.getElementById("msg").innerText = "Acho Wrong passcode Pattu🤌🏻";
    code = "";
    updateDots();
  }
}

/* Gift flow */
function nextStep() {
  document.getElementById("giftpage").classList.add("hidden");
  document.getElementById("cakepage").classList.remove("hidden");
}

function nextStep2() {
  document.getElementById("messagepage").classList.add("hidden");
  document.getElementById("messipage").classList.remove("hidden");
}
