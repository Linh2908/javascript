class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 80;
        this.h =10;
        this.status = false;
    }

    draw() {
        let ctx = document.querySelector("#myCanvas").getContext("2d");
        ctx.fillStyle = "#FFB8A2";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        
        ctx.fill();
    }
}