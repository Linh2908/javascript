class myCircle {
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius =10;
        this.speedX = 2;
        this.speedY = 2;
    }
    setSpeedX(speed) {
        this.speedX = speed;
    }
    setSpeedY(speed) {
        this.speedY = speed;
    }
    drawBall(){
        let ctx =  document.querySelector("#myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#FFB8A2";
        ctx.fill();
        ctx.closePath();
    }
    clearRect() {
        let ctx =  document.querySelector("#myCanvas").getContext("2d");
        ctx.clearRect(0,0,500,500);
    }
   
    moveBall() {
        this.x +=this.speedX;
        this.y -=this.speedY;
    }
    

}

