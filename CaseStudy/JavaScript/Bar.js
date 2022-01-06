class myBar1 {


    constructor(x) {
        this.x = x;
        this.y = 490;
        this.h = 10;
        this.w = 60;
        this.isLeft = false;
        this.isRight = false;
    }

    setIsRight(boolean) {
        this.isRight = boolean;
    }
    draw() {
        let ctx = document.querySelector("#myCanvas").getContext("2d");
        ctx.fillRect(this.x,this.y, this.w, this.h);
        ctx.fillStyle = "#FFB8A2";
        ctx.fill();
    }

    moveRight() {
        if(this.isRight && this.x <435){
            this.x +=10;
        }
    }
    moveLeft() {
        if(this.isLeft && this.x > 0){
            this.x -=10;
        }
    }

}