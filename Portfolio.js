const Name = document.getElementById("Name");
const Crack_Container = document.getElementById("Crack_Container");

const Wood_Sound = document.getElementById("Wood_Sound");
const Glass_Sound = document.getElementById("Glass_Sound");
const Glass_break = document.getElementById("Glass_break");
const Click = document.getElementById("Click");
const Click2 = document.getElementById("Click2");
const Camera_Shutter = document.getElementById("Camera_Shutter");
const Sci_Fi_Click = document.getElementById("Sci_Fi_Click");
const Glitch = document.getElementById("Glitch");
const Cave_Click = document.getElementById("Cave_Click");
const Light_Bulb_Break = document.getElementById("Light_Bulb_Break");


let Name_clicked = 0;
let Sound_played = 0;

function Name_tilt(){

    Name_clicked++;

    

        Wood_Sound.play();
        
        Name.style.pointerEvents = "none";
        
            setTimeout(() => {
        
        Name.style.pointerEvents = "auto";
        
            }, 250);
        

        Sound_played++;
    

    if ( Sound_played === 4 ) {

        Name.style.cssText = `
    color: rgb(0, 0, 0);
    text-shadow: 3px 3px 3px rgb(0, 0, 0);
    box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.700), 0px -6px 50px rgb(0, 0, 0);
    transition: 1s;
    display: inline-block;
    padding: 20px;
    margin: 30px;
    cursor: pointer;
    pointer-events: none;

    animation: tilt 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-iteration-count: 1;
    margin: 30px;
    overflow: hidden;
    z-index: 4;
    `;

    setTimeout(() => {
        
        Name.style.pointerEvents = "auto";

    }, 1500);

    }

    if ( Sound_played === 6 ) {

        Name.style.cssText = `
    animation: tilt2 2s cubic-bezier(0.36, 0.9, 0.64, 1) forwards;
    animation-iteration-count: 1;
    margin: 30px;
    z-index: 4;
    `;


    setTimeout(() => {
        
        Name.textContent = `Remember ME???`;
        Name.style.background = `url(MilesMorales_GlassBreak.gif) center / 100% auto repeat fixed`;
        }, 1900);
    
        setTimeout(() => {
    
            Crack_Container.style.opacity = `1`;
        }, 2000);

    }

}






const darkmode = document.getElementById("darkmode");
const darkmode_container = document.getElementById("darkmode_container");
const body = document.body;
let black_or_white = 0;

function DarkMode() {
    black_or_white++;

    Glass_Sound.play();

    if ( black_or_white % 2 !== 0 ) {
    darkmode.setAttribute( "src" , "Sun.png" );
    darkmode_container.style.boxShadow = `0px 0px 20px rgb(0, 0, 0)`;
    darkmode_container.style.backgroundColor = `rgb(0, 0, 0)`;
    body.style.backgroundColor = `rgb(181, 188, 255)`;
    }

    else {
        darkmode.setAttribute( "src" , "moon.webp" );
        darkmode_container.style.boxShadow = `0px 0px 20px rgb(0, 16, 233)`;
        darkmode_container.style.backgroundColor = `rgb(31, 65, 255)`;
        body.style.backgroundColor = `rgb(12, 12, 12)`;
    }

    if ( black_or_white === 8 ) {
        Glass_break.play();
        darkmode_container.style.display = `none`;
    }
}







let FullName_click = 0;
const FullName = document.getElementById("Full_Name");

function Full_Name() {

    FullName_click++


    if ( FullName_click === 1 ) {

        FullName.style.cssText = `
    color: rgb(50, 72, 218);
    letter-spacing: 2px;
    word-spacing: 20px;
    text-shadow: 7px 7px 3px rgb(0, 0, 0), 0px 0px 10px rgb(0, 21, 255);
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.800);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 8px 8px 10px rgb(0, 0, 0), 0px 0px 50px rgba(0, 11, 128, 0.597);
    transition: 1s;
    cursor: pointer;
    transform: translate(0px , -200px);
    border: 2px rgba(61, 61, 255, 0.523) double;
    
    animation: flip 1s ease-in-out forwards;
    animation-iteration-count: 1;
    
    z-index: 10;
    `;

    Camera_Shutter.play();

    setTimeout(() => {
        FullName.textContent = `The Chief of WDC`;
}, 500);



setTimeout(() => {
    Camera_Shutter.play();
}, 650);

    }

}




const options_container = document.getElementById("options_container");
const _close_ = document.getElementById("close");
const options = document.getElementById("options");

function option() {

    options_container.style.width = `200px`;
    options_container.style.opacity = `.9`;

    options.style.transform = `translate(0px , 80px)`;

    Sci_Fi_Click.play();

    setTimeout(() => {
        Sci_Fi_Click.play();
    }, 200);
    
    setTimeout(() => {
        _close_.style.opacity = `1`;
    }, 500);

    setTimeout(() => {
        _close_.style.pointerEvents = `auto`;
    }, 1500);
}





const _Text_small = document.getElementById("Text");
const Me = document.getElementById("Me");
const _TEXT_ = document.getElementById("_TEXT_");
const input = document.getElementById("input");
const _SKIP_ = document.getElementById("SKIP");

function _close() {

    _close_.style.opacity = `0`;

    Click2.play();

    options.style.transform = `translate( -200px , 80px )`;
    options.style.transition = `1s`;

    setTimeout(() => {
        options_container.style.width = `0px`;
        options_container.style.opacity = `0`;
    }, 10);
}





function _Home_() {
    Cave_Click.play();
}
function _About_() {
    Click.play();
}
function _To_Contact_() {
    Light_Bulb_Break.play();
}
function _WDC_() {
    Glitch.play();
}

function SKIP() {
    _Text_small.style.color = `cyan`;
    _Text_small.style.textShadow = `0px 0px 20px cyan`;
    _Text_small.style.transform = `translate(0px , -1212.5px)`;
    _Text_small.style.animation = `none`;

    Me.style.filter = `blur(0px)`;
    Me.style.opacity = `1`;
    Me.style.animation = `none`;

    _TEXT_.style.height = `500px`;
    _TEXT_.style.animation = `none`;

    input.style.filter = `blur(0px)`;
    input.style.opacity = `1`;
    input.style.animation = `none`;

    _SKIP_.style.transform = `translate(870px , 100px) rotateX(90deg) scale(0.3,0.3)`;
    _SKIP_.style.opacity = `0`;
    _SKIP_.style.pointerEvents = `none`;
    _SKIP_.style.animation = `none`;

    Glass_break.play();
}