// 🔐 PASSCODE
let val = "";

// 🔢 PRESS FUNCTION (PASSWORD)
function press(num){
    val += num;

    let boxes = document.querySelectorAll(".box");

    boxes.forEach((b,i)=>{
        b.style.background = i < val.length ? "#fff" : "transparent";
    });

    // ✅ CORRECT PASSWORD
    if(val === "2429"){
        document.getElementById("lock").style.display = "none";
        document.getElementById("home").classList.remove("hidden");
    }

    // ❌ WRONG PASSWORD
    if(val.length >= 4 && val !== "2429"){
        alert("Password thappu ma😓");
        val = "";
        boxes.forEach(b => b.style.background = "transparent");
    }
}

// 🎁 OPEN GIFT
function openGift(n){
    document.getElementById("giftPage").style.display = "flex";

    let c = document.getElementById("giftContent");

    // 🎂 GIFT 1 → CAKE
    if(n === 1){
        c.innerHTML = `
        <h2>Enter your cute age thango🌹</h2>

        <input id="ageInput" type="number" placeholder="Enter age">
        <button onclick="generateCake()">Create Cake</button>

        <div id="cakeArea"></div>
        `;
    }

    // 💌 GIFT 2 → YOUR PARAGRAPH
    if(n === 2){
        c.innerHTML = `
        <img src="your-photo.jpg" class="miniPhoto">

        <p style="line-height:1.6;">
        Hellloooo My Dear Rasamalaiii🥹🤍 Happppyyy happpyyy 19th birthday thangam. May this year bring all the blessings and happiness to you. Epayume ne happy ah irukanum en kuda irukanum. Andddd unga sirippuku na adimai so sirichune sandhosama iru ma🫂❤️. Ne un vazhkaila edhu ketalum kedaikanum. Im soooo soooo proud of you my champ. Ne expect pannadhu elame un life la kedaikum. Unaku pudichadhu elame vangitharuven.Na panna mistakes lam...ena panna poren nu therila..ana una seri paniruven epdiyachu.Enaya vitutu poyradha hrithik , Enaku unna vitta yarum ila da🥺. Aprmmmm Unna romba romba romba romba romba pudikum💗🫂. Kalyanam panikanum nu aasa padren😗. I LOVE YOU SO SO SO SO MUCH champ🌹 Once againnn Happpiestt birthday😘
        </p>
        `;
    }

    // ⚽ GIFT 3 → MESSI
    if(n === 3){
        c.innerHTML = `
        <img src="messii.jpg" class="miniPhoto">

        <p>Someone special has a message for you… 👀⚽</p>
        <p id="subtitle" style="min-height:40px;"></p>

        <audio id="messiAudio">
            <source src="messi-voice.mp3" type="audio/mpeg">
        </audio>

        <button onclick="playMessi()">▶ Play Message</button>
        `;
    }
}

// 🎂 CAKE GENERATE
function generateCake(){
    let age = document.getElementById("ageInput").value;
    let area = document.getElementById("cakeArea");

    if(!age || age <= 0){
        alert("Achoo Enter valid age ma🤌🏻");
        return;
    }

    let candles = "";

    for(let i=0;i<age;i++){
        candles += `<span>🕯️</span>`;
    }

    area.innerHTML = `
        <div style="font-size:22px">${candles}</div>
        <button onclick="blow()">Make wish and Blow kanna</button>
    `;
}

// 💨 BLOW CANDLES
function blow(){
    document.getElementById("cakeArea").innerHTML += "<p>May your alll wishes come true thangoma🥹❤️</p>";
}

// ⚽ PLAY MESSI AUDIO
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
