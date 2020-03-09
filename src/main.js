const 
    cvs = document.querySelector("canvas"),
    ctx = cvs.getContext("2d");

let screen;
resize();

window.addEventListener("resize", ()=> {
    resize();
});
window.oncontextmenu = ()=> {return false;};


const count = document.createElement("span"); 
document.body.appendChild(count);
count.style.position = "absolute";
count.style.top = "24px";

function loop() {
    requestAnimationFrame(loop);

    if (typeof update == "function")
        update();

    if (typeof render == "function") {
        ctx.clearRect(0, 0, screen.width, screen.height);
        render();
    }
} loop();

function setCount(num) {
    count.innerHTML = "Count: " + num;
    if (num >= 100 && num < 200 || num == 0) 
        count.style.color = "rgb(120, 50, 50)";
    else if (num >= 200 && num < 300) 
        count.style.color = "rgb(220, 50, 50)";
    else if (num >= 300) 
        count.style.color = "rgb(255, 0, 0)";
    else
        count.style.color = "black";
}

function resize() {
    screen = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    cvs.width = screen.width;
    cvs.height = screen.height;
}