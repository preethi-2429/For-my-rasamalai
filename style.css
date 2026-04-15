// 🔐 PASSCODE
let val = "";

// 🎵 BACKGROUND MUSIC
let bgMusic = new Audio("song.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.25;

// autoplay after first click
document.addEventListener("click", () => {
    bgMusic.play().catch(()=>{});
}, { once:true });

// 🔁 NAVIGATION
function goTo(page){
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(page).classList.remove("hidden");
}

// 🔢 PASSCODE INPUT
function press(num){
    val += num;

    let boxes = document.querySelectorAll(".box");

    boxes.forEach((b, i) => {
        b.style.background = i < val.length ? "#fff" : "transparent";
    });

    if(val === "2429"){
        goTo("home");
    }

    if(val.length >= 4 && val !== "2429"){
        alert("Wrong password pattuma😓");
        val = "";
        boxes.forEach(b => b.style.background = "transparent");
    }
}

// 🎁 GIFT SYSTEM
let currentGift = 1;

function openGift(n){
    currentGift = n;
    goTo("giftPage");

    let content = document.getElementById("giftContent");

    // 🎂 CAKE
    if(n === 1){
        content.innerHTML = `
        <h2>Enter Age 🎂</h2>

        <input id="ageInput" type="number" placeholder="Age">
        <button onclick="generateCake()">Create Cake</button>

        <div id="cakeArea"></div>
        `;
    }

    // 💌 MESSAGE
    else if(n === 2){
        content.innerHTML = `
        <p>
        Hellloooo My Dear Rasamalaiii🥹🤍 Happppyyy happpyyy 19th birthday thangam. May this year bring all the blessings and happiness to you. Epayume ne happy ah irukanum en kuda irukanum. Andddd unga sirippuku na adimai so sirichune sandhosama iru ma🫂❤️. Ne un vazhkaila edhu ketalum kedaikanum. Im soooo soooo proud of you my champ. Ne expect pannadhu elame un life la kedaikum. Unaku pudichadhu elame vangitharuven.Na panna mistakes lam...ena panna poren nu therila..ana una seri paniruven epdiyachu.Enaya vitutu poyradha hrithik , Enaku unna vitta yarum ila da🥺. Aprmmmm Unna romba romba romba romba romba pudikum💗🫂. Kalyanam panikanum nu aasa padren😗. I LOVE YOU SO SO SO SO MUCH champ🌹 Once againnn Happpiestt birthday😘
        </p>
        `;
    }

    // ⚽ MESSI
    else if(n === 3){
        content.innerHTML = `
        <p>Someone special has a message 👀⚽</p>
        <p id="subtitle"></p>

        <audio id="messiAudio" controls>
            <source src="messi.mp3" type="audio/mpeg">
        </audio>

        <button onclick="playMessi()">▶ Play</button>
        `;
    }
}

// 🎂 CREATE 3D CAKE
function generateCake(){
    let age = document.getElementById("ageInput").value;
    let cakeArea = document.getElementById("cakeArea");

    if(!age || age <= 0){
        alert("Enter your age❤️");
        return;
    }

    let candles = "";

    for(let i=0; i<age; i++){
        candles += `
        <div class="candle">
            <div class="flame"></div>
        </div>`;
    }

    cakeArea.innerHTML = `
        <div class="cake3d">
            <div class="top">${candles}</div>
            <div class="layer"></div>
            <div class="layer middle"></div>
            <div class="layer bottom"></div>
        </div>

        <button onclick="blowCandles()">Blow Candles 💨</button>
    `;
}

// 💨 BLOW CANDLES
function blowCandles(){
    document.querySelectorAll(".flame").forEach(f => {
        f.classList.add("off");
    });
}

// ⚽ MESSI SUBTITLES
function playMessi(){
    let audio = document.getElementById("messiAudio");
    let sub = document.getElementById("subtitle");

    audio.play();

    audio.ontimeupdate = ()=>{
        let t = audio.currentTime;

        if(t < 3) sub.innerText = "Hi Hrithik... it's Leo.";
        else if(t < 7) sub.innerText = "Happy birthday!, from the bottom of the heart";
        else if(t < 12) sub.innerText = ".I want to thank you for all the love.I hope you have an amazing day.Sending you a big hug";
        else sub.innerText = "Visca el Barça!💙❤️";
    };
}

// 📱 SWIPE GESTURE
let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextGift();
    }

    if(endX - startX > 50){
        prevGift();
    }
});

function nextGift(){
    currentGift++;
    if(currentGift > 3) currentGift = 1;
    openGift(currentGift);
}

function prevGift(){
    currentGift--;
    if(currentGift < 1) currentGift = 3;
    openGift(currentGift);
}
