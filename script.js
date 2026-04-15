let bgMusic = new Audio("song.mp3");
bgMusic.loop = true;
bgMusic.volume = 0;

// 🎵 FADE IN MUSIC
function startMusic(){
    bgMusic.play();
    let v = 0;
    let fade = setInterval(()=>{
        if(v < 0.25){
            v += 0.01;
            bgMusic.volume = v;
        } else clearInterval(fade);
    },200);
}

// 🎬 AFTER INTRO
setTimeout(()=>{
    document.getElementById("login").classList.remove("hidden");
},3000);

// 📱 SWIPE UP UNLOCK
let startY = 0;

document.addEventListener("touchstart",e=>{
    startY = e.touches[0].clientY;
});

document.addEventListener("touchend",e=>{
    let endY = e.changedTouches[0].clientY;

    if(startY - endY > 80){
        unlock();
    }
});

function unlock(){
    startMusic();

    // ❤️ HEART EXPLOSION
    for(let i=0;i<20;i++){
        let h = document.createElement("div");
        h.innerText="❤️";
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

// 🎁 GIFTS
let currentGift=1;

function openGift(n){
    currentGift=n;
    document.getElementById("giftPage").style.display="flex";
    let c=document.getElementById("giftContent");

    if(n===1){
        c.innerHTML=`
        <input id="ageInput" placeholder="Age">
        <button onclick="cake()">Create Cake</button>
        <div id="cakeArea"></div>`;
    }

    if(n===2){
        c.innerHTML=`<p>I love you di patttuma💋🥹</p>`;
    }

    if(n===3){
        c.innerHTML=`<p>A Bug Surprise🌝 </p>`;
    }
}

// 🎂 CAKE
function cake(){
    let age=document.getElementById("ageInput").value;
    let candles="";

    for(let i=0;i<age;i++){
        candles+=`<div class="candle"><div class="flame"></div></div>`;
    }

    document.getElementById("cakeArea").innerHTML=`
    <div class="cake3d">
        <div class="top">${candles}</div>
        <div class="layer"></div>
        <div class="layer middle"></div>
        <div class="layer bottom"></div>
    </div>
    <button onclick="blow()">Blow 💨</button>`;
}

// 💨 BLOW + SMOKE
function blow(){
    document.querySelectorAll(".flame").forEach(f=>{
        f.style.display="none";

        let s=document.createElement("div");
        s.className="smoke";
        f.parentElement.appendChild(s);
    });
}