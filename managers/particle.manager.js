class Partile {
    constructor(x, y, radius, color, dir={x: 0, y: 0}) {
        this.x = x;
        this.y = y;
        this.dir = dir;

        this.color = color;
        this.radius = radius;

        this.draw = ()=> {
            ctx.fillStyle = `rgba(${ this.color[0] }, ${ this.color[1] }, ${ this.color[2] }, ${ this.color[3] })`;
            ctx.strokeStyle = `rgba(${ this.color[0] }, ${ this.color[1] }, ${ this.color[2] }, 1)`;

            ctx.lineWidth = 2;

            ctx.arc(this.x, this.y, this.radius, 0, PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();

            // Move
            const speed = .6;

            this.dir.x *= .93;
            this.dir.y *= .93;
            this.x += this.dir.x;
            this.y += this.dir.y;
        };
        this.isRange = (x, y, radius)=> {
            return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) < radius;
        };
    }
}