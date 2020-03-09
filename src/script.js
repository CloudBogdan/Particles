let mouse = new Mouse;

let part = [];
let mouseColor = 30;

for (let i = 6; i --;) {
    const rx = random(20, screen.width-20);
    const ry = random(20, screen.height-20);
    part.push(
        new Partile(
            rx, ry, // Position
            random(10, 30), // Radius
            [180, 30, 30, .2] // Color (rgba)
        )
    );
}
function update() {
    for (let i in part) {
        part[i].dir.x += (mouse.x - part[i].x) / 1400;
        part[i].dir.y += (mouse.y - part[i].y) / 1400;

        if (mouse.isRange(part[i].x, part[i].y, 100)) {
            part[i].dir.x += .5 - (mouse.x - part[i].x) / 50;
            part[i].dir.y += .5 - (mouse.y - part[i].y) / 50;
            console.log(-(mouse.y - part[i].y) / 50);
        }
        
        part[i].color[3] = 1.5 - mouse.isRange(part[i].x, part[i].y, 150, true) / 150;

        if (
            part[i].x < -20 || part[i].x > screen.width + 20 ||
            part[i].y < -20 || part[i].y > screen.height + 20
        ) {
            part.splice(i, 1);
            break;   
        }

        for (let j in part) {
            if (part[j].isRange(part[i].x, part[i].y, part[i].radius + part[j].radius)) {
                part[i].dir.x += -(part[j].x - part[i].x) * .01;
                part[i].dir.y += -(part[j].y - part[i].y) * .01;

                part[j].dir.x += -(part[i].x - part[j].x) * .01;
                part[j].dir.y += -(part[i].y - part[j].y) * .01;
            }
        }
    }

    if (mouse.isDown()) {
        if (part.length < 130)
            part.push(
                new Partile(
                    mouse.x, mouse.y, // Position
                    random(10, 30), // Radius
                    [180, 30, 30, .2], // Color (rgba)
                    {x: random(-2, 2), y: random(-2, 2)}
                )
            );

        if (mouseColor < 180) mouseColor += 7;
    } else { 
        if (mouseColor > 30) mouseColor -= 3;
    }

    setCount(part.length);
}

function render() {
    for (let i in part) part[i].draw();

    ctx.fillStyle = `rgb(${mouseColor}, 30, 30)`;
    ctx.arc(mouse.x, mouse.y, 30, 0, PI*2);
    ctx.fill();
    ctx.beginPath();
}