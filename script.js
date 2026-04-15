// 🔐 PASSCODE (not needed now but kept safe)
let val = "";

// 🎵 BACKGROUND MUSIC
let bgMusic = new Audio("song.mp3");
bgMusic.loop = true;
bgMusic.volume = 0;

// 🎵 FADE-IN MUSIC
function startMusic(){
    bgMusic.play().catch(()=>{});
    let v = 0;
    let fade = setInterval(()=>{
        if(v < 0.25){
            v += 0.01;
            bgMusic.volume = v;
        } else clearInterval(fade);
    },200);
}

// 🎬 SHOW LOCK AFTER INTRO
setTimeout(()=>{
    document.getElementById("login").classList.remove("hidden");
},3000);

// 📱 SWIPE UP TO UNLOCK
let startY = 0;

document.addEventListener("touchstart", e=>{
    startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e=>{
    let endY = e.changedTouches[0].clientY;

    if(startY - endY > 80){
        unlock();
    }
});

function unlock(){
    startMusic();

    // 💋 HEART EXPLOSION
    for(let i=0;i<20;i++){
        let h = document.createElement("div");
        h.innerText="💋";
        h.style.position="absolute";
        h.style.left="50%";
        h.style.top="50%";
        h.style.animation="float 2s ease";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),2000);
    }

    document.getElementById("login").style.display="none";
    document.getElementById("home").style.display="flex";
}

// 🎁 GIFT SYSTEM
let currentGift = 1;

function openGift(n){
    currentGift = n;
    document.getElementById("giftPage").style.display = "flex";

    let c = document.getElementById("giftContent");

    // 🎂 GIFT 1 → CAKE
    if(n === 1){
        c.innerHTML = `
        <h2>Enter Age 🎂</h2>

        <input id="ageInput" type="number" placeholder="Enter age">
        <button onclick="generateCake()">Create Cake</button>

        <div id="cakeArea"></div>
        `;
    }

    // 💌 GIFT 2 → YOUR PARAGRAPH (FULL ❤️)
    if(n === 2){
        c.innerHTML = `
        <img src="your-photo.jpg" class="miniPhoto">

        <p style="line-height:1.6;">
        Hellloooo My Dear Rasamalaiii🥹🤍 Happppyyy happpyyy 19th birthday thangam. May this year bring all the blessings and happiness to you. Epayume ne happy ah irukanum en kuda irukanum. Andddd unga sirippuku na adimai so sirichune sandhosama iru ma🫂❤️. Ne un vazhkaila edhu ketalum kedaikanum. Im soooo soooo proud of you my champ. Ne expect pannadhu elame un life la kedaikum. Unaku pudichadhu elame vangitharuven.Na panna mistakes lam...ena panna poren nu therila..ana una seri paniruven epdiyachu.Enaya vitutu poyradha hrithik , Enaku unna vitta yarum ila da🥺. Aprmmmm Unna romba romba romba romba romba pudikum💗🫂. Kalyanam panikanum nu aasa padren😗. I LOVE YOU SO SO SO SO MUCH champ🌹 Once againnn Happpiestt birthday😘
        </p>
        `;
    }

    // ⚽ GIFT 3 → MESSI AUDIO
    if(n === 3){
        c.innerHTML = `
        <img src="messii.jpg" class="miniPhoto">

        <p>Someone special has a message for you… 👀⚽</p>
        <p id="subtitle" style="min-height:40px;"></p>

        <audio id="messiAudio">
            <source src="messi.mp3" type="audio/mpeg">
        </audio>

        <button onclick="playMessi()">▶ Play Message</button>
        `;
    }
}

// 🎂 3D CAKE
function generateCake(){
    let age = document.getElementById("ageInput").value;
    let area = document.getElementById("cakeArea");

    if(!age || age <= 0){
        alert("Enter valid age ❤️");
        return;
    }

    let candles = "";

    for(let i=0;i<age;i++){
        candles += `<div class="candle"><div class="flame"></div></div>`;
    }

    area.innerHTML = `
    <div class="cake3d">
        <div class="top">${candles}</div>
        <div class="layer"></div>
        <div class="layer middle"></div>
        <div class="layer bottom"></div>
    </div>

    <button onclick="blow()">Blow Candles 💨</button>
    `;
}

// 💨 BLOW + SMOKE
function blow(){
    document.querySelectorAll(".flame").forEach(f=>{
        f.style.display="none";

        let s = document.createElement("div");
        s.className = "smoke";
        f.parentElement.appendChild(s);
    });
}

// ⚽ MESSI PLAY
function playMessi(){
    let audio = document.getElementById("messiAudio");
    let sub = document.getElementById("subtitle");

    audio.play();

    audio.ontimeupdate = ()=>{
        let t = audio.currentTime;

        if(t < 3) sub.innerText = "Hi Hrithik... it's Leo.";
        else if(t < 7) sub.innerText = "Happy birthday, from the bottom of my heart.";
        else if(t < 12) sub.innerText = "I want to thank you for all the love.";
        else if(t < 17) sub.innerText = "I hope you have an amazing day...";
        else if(t < 22) sub.innerText = "Sending you a big hug.";
        else sub.innerText = "Visca el Barça! ⚽🤍💙";
    };
}

// 📱 SWIPE GIFTS
let startX = 0;

document.addEventListener("touchstart", e=>{
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e=>{
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50) nextGift();
    if(endX - startX > 50) prevGift();
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