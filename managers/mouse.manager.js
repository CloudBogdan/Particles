class Mouse {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.down = false;

        this.isRange = (x, y, radius, number=false)=> {
            if (!number)
                return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) < radius;
            else
                return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
        };
        this.isDown = ()=> {
            // this.down = false;
            window.onmousedown = e=> {
                this.down = true;
            };
            return this.down;
        }
        window.onmouseup = ()=> {
            this.down = false;
        };

        window.onmousemove = e=> {
            this.x = e.clientX;
            this.y = e.clientY;
        };
    }
}