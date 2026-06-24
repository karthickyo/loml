const noBtn = document.getElementById("noBtn");
const messages = [
  "r u sure? 🥀",
  "really sure? 🥀🥀",
  "think again. 🥀🥀🥀",
  "i'll be sad. 🥀🥀🥀🥀",
  "very sad. 🥀🥀🥀🥀🥀",
  "extremely sad. 🥀🥀🥀🥀🥀🥀",
  "🥺 🥀🥀🥀🥀🥀🥀🥀",
  "pretty please? 🥀🥀🥀🥀🥀🥀🥀🥀",
  "last chance. 🥀🥀🥀🥀🥀🥀🥀🥀🥀",
  "fine.. sob.. 🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀",
  "pleaseeeeeee maaaybeeee yes? 💜",
  "huh, yess>!>>!!?!?!? 💜"
];
let index = 0;
const ouchSounds = [
    "ouch1.mp3",
    "ouch2.mp3",
    "ouch3.mp3"
];
const yaySound = new Audio("yay.mp3");
noBtn.addEventListener("click", () => {
    if(index >= messages.length){
        yaySound.currentTime = 0;
        yaySound.play();
        showSuccess();
        return;
    }
    if(index === messages.length - 1){
        yaySound.currentTime = 0;
        yaySound.play();
    } else {
        const randomSound =
            ouchSounds[Math.floor(Math.random() * ouchSounds.length)];
        const ouch = new Audio(randomSound);
        ouch.play();
    }
    noBtn.textContent = messages[index];
    if(index < statusMessages.length){
        document.getElementById("status").textContent =
            statusMessages[index];
    }
    index++;
});
const statusMessages = [
    "Current Status: Slightly Concerned..",
    "Current Status: Nervous..!",
    "Current Status: Sweating.. ToT",
    "Current Status: Sad... ",
    "Current Status: Very Sad!!..",
    "Current Status: Heart Cracking.. :((",
    "Current Status: Begging.. pwease..",
    "Current Status: Desperate..!!!",
    "Current Status: Sending Flowers.. ;(( pls.",
    "Current Status: Last Hope..! ",
    "Current Status: ACCEPTANCE ARC?!?!??!?!/1/1/!??!",
    "Current Status: YIPPEE!!! >w<"
];
document
.getElementById("yesBtn")
.addEventListener("click", () => {
    yaySound.currentTime = 0;
    yaySound.play();
    document.getElementById("yesBtn").textContent =
        "YIPPEEEE 💜";
    setTimeout(() => {
        showSuccess();
    }, 600);
});
const music = new Audio("music.mp3");
function showSuccess(){
    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            font-family:Poppins;
            color:#7e22ce;
        ">
            <h1>YAYYYYY 💜</h1>
            <h2>loading relationship...</h2>
            <p> wait while your application is being processed. hks.. </p>
        </div>
    `;
    setTimeout(() => {
        window.location.href = "accepted.html";
    }, 2500);
}

