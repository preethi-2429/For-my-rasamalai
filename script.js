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
    // open letter
    document.getElementById("page3").style.transform = "rotateY(-180deg)";
    document.getElementById("page4").style.transform = "rotateY(0deg)";
  }

  if (num === 2) {
  document.getElementById("page3").style.transform = "rotateY(-180deg)";
  document.getElementById("page5").style.transform = "rotateY(0deg)";
  }

  if (num === 3) {
  document.getElementById("page3").style.transform = "rotateY(-180deg)";
  document.getElementById("page6").style.transform = "rotateY(0deg)";
  }
}
/* BACK TO GIFTS */
function backToGifts() {
  document.getElementById("page3").style.transform = "rotateY(0deg)";
  document.getElementById("page4").style.transform = "rotateY(180deg)";
}
/* 🎂 CREATE CAKE */
function createCake() {
  let age = document.getElementById("ageInput").value;
  let area = document.getElementById("cakeArea");

  if (!age || age <= 0) return;

  area.innerHTML = '<div class="cake" id="cake"></div>';

  let cake = document.getElementById("cake");

  for (let i = 0; i < age; i++) {
    let candle = document.createElement("div");
    candle.className = "candle";

    candle.style.left = (10 + i * 10) + "px";

    let flame = document.createElement("div");
    flame.className = "flame";

    candle.appendChild(flame);
    cake.appendChild(candle);
  }

  cake.onclick = blowCandles;
}

/* 💨 BLOW */
function blowCandles() {
  let flames = document.querySelectorAll(".flame");

  flames.forEach(f => f.remove());

  setTimeout(() => {
    alert("May all your wish comes true with success 🥺💙");
  }, 300);
}

/* ⬅ BACK */
function backToGiftsFromCake() {
  document.getElementById("page3").style.transform = "rotateY(0deg)";
  document.getElementById("page5").style.transform = "rotateY(180deg)";
}
/* ⚽ PLAY MESSI */
function playMessi() {
  let audio = document.getElementById("messiAudio");
  let textBox = document.getElementById("messiText");

  audio.play();
  textBox.innerHTML = "";

  let lines = [
    "Hi Hrithik...",
    "it's Leo.",
    "Happy birthday, from the bottom of my heart.",
    "I want to thank you for all the love.",
    "I hope you have an amazing day...",
    "Sending you a big hug.",
    "Visca el Barça! 💙❤️"
  ];

  let i = 0;

  let interval = setInterval(() => {
    if (i < lines.length) {
      textBox.innerHTML += lines[i] + "<br>";
      i++;
    } else {
      clearInterval(interval);
    }
  }, 1500);
}

/* ⬅ BACK */
function backToGiftsFromMessi() {
  document.getElementById("page3").style.transform = "rotateY(0deg)";
  document.getElementById("page6").style.transform = "rotateY(180deg)";
}

/* 🏠 HOME */
function goHome() {
  location.reload();
}
