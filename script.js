@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap');

body{
    margin:0;
    font-family:'Baloo 2', cursive;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:black;
    color:white;
}

/* APP */
.app{
    width:768px;
    height:576px;
    border-radius:30px;
    overflow:hidden;
    position:relative;
}

/* INTRO */
.intro{
    position:absolute;
    width:100%;
    height:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    animation:fadeOut 3s forwards;
}

.introText{
    font-size:28px;
    animation:fadeIn 2s;
}

@keyframes fadeOut{
    0%{opacity:1;}
    100%{opacity:0; visibility:hidden;}
}

@keyframes fadeIn{
    from{opacity:0;}
    to{opacity:1;}
}

/* PHOTO */
.photo-bg{
    position:absolute;
    width:100%;
    height:100%;
    background:url("your-photo.jpg") center/cover;
    filter:blur(8px);
    animation:zoom 10s infinite alternate;
}

@keyframes zoom{
    from{transform:scale(1.1);}
    to{transform:scale(1.2);}
}

/* HEARTS */
.hearts::before{
    content:"💗✨🤍🌹💕😘";
    position:absolute;
    width:100%;
    text-align:center;
    opacity:0.2;
    animation:float 10s infinite linear;
}

@keyframes float{
    from{transform:translateY(100%);}
    to{transform:translateY(-120%);}
}

/* PAGE */
.page{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}

/* GLASS */
.glass{
    background:rgba(255,255,255,0.2);
    padding:25px;
    border-radius:20px;
    backdrop-filter:blur(20px);
}

/* BUTTON */
button{
    margin:10px;
    padding:10px 20px;
    border:none;
    border-radius:15px;
    background:#ff4d6d;
    color:white;
}

/* CAKE */
.cake3d{
    width:200px;
    margin:20px auto;
}

.layer{
    width:200px;
    height:40px;
    border-radius:50%;
    background:#ff85a2;
    margin-top:-15px;
}

.middle{background:#ff6b81;}
.bottom{background:#ff4d6d;}

.top{display:flex;flex-wrap:wrap;justify-content:center;}

.candle{
    width:6px;height:20px;background:white;margin:2px;position:relative;
}

.flame{
    position:absolute;
    top:-10px;
    width:10px;height:10px;
    background:orange;
    border-radius:50%;
    animation:flicker 0.2s infinite alternate;
}

@keyframes flicker{
    from{transform:scale(1);}
    to{transform:scale(1.3);}
}

.smoke{
    width:8px;height:8px;
    background:gray;
    border-radius:50%;
    animation:smokeUp 1s forwards;
}

@keyframes smokeUp{
    from{opacity:1; transform:translateY(0);}
    to{opacity:0; transform:translateY(-20px);}
}