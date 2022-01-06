

let posX = Math.floor(Math.random()*490 + 10);
let ball = new myCircle(posX, 480);
let bar = new myBar1(posX-30);

const bricksRow = Math.floor(Math.random()*5 +1);
const bricksCol = 5;
const brickPadding = 10;
const brickTop = 30;
const brickLeft = 30;
let count = 0;
let lives =3;


ball.drawBall();
bar.draw();
function playBall() {
    ball.clearRect();

   let check = checkCollision(ball, bar);

    if(ball.x >= 490 ){
        ball.setSpeedX(-2);
    }if(ball.x <=10) {
        ball.setSpeedX(2);

    }
    
    if(ball.y <= 10){
        ball.setSpeedY(-2);
    }else if(check == true){
        ball.setSpeedY(2);
    }else if(ball.y>=490){
       lives --;
       if(!lives) {
           let anwser = confirm("YOU LOSE :). Are you play agian?");
           document.querySelector("#play").style.display = "none";
           if(anwser){
                document.querySelector("#play").style.display = "block";
                document.location.reload();
           }else{
                alert("SEEN YOU AGAIN !!!")
                clearInterval(checkPlay);
            }
           
       }else{
            newPosX = Math.floor(Math.random()*490 + 10);
            ball.x = newPosX;
            bar.x = newPosX -30;
       }

        
    }
    drawLives();
    drawScore();
    collisionBricks();
    drawBrick();
    bar.draw();
    bar.moveRight();
    bar.moveLeft();
    ball.moveBall();
    ball.drawBall();
}


 




document.addEventListener("keydown",function (e) {
    if(e.keyCode == 39) {
        bar.isRight = true;
    }else if(e.keyCode == 37) {
        bar.isLeft = true;
    }
});

document.addEventListener("keyup",function (e) {
    if(e.keyCode == 39) {
        bar.isRight =false;
    }else if(e.keyCode == 37) {
        bar.isLeft = false;
    }
});

document.onmousemove = function(e) {
    if(e.target.matches("#myCanvas")){
        if(e.offsetX > -1 && e.offsetX <450) {
            bar.x = e.offsetX;
        }
    }
}

function checkCollision(cir, rect) {
    let Ax = cir.x;
    let Ay = cir.y;

    let rect_left = rect.x;
    let rect_top = rect.y;
    let rect_right = rect.x + rect.w;
    let rect_bottom = rect.y + rect.h;


    if(cir.x < rect_left) {
        Ax = rect_left;
    }else if(cir.x > rect_right){
        Ax = rect_right;
    }

    if(cir.y < rect_top) {
        Ay = rect_top;
    }else if(cir.y > rect_bottom){
        Ay = rect_bottom;
    }

    let dx = cir.x - Ax;
    let dy = cir.y - Ay;

    return (dx*dx + dy*dy) <= cir.radius * cir.radius;
}
let bricks = [];
   
   for (let c = 0; c < bricksCol; c++) {
      
        bricks[c]= [];
       for (let r = 0; r < bricksRow; r++) {
          
           bricks[c][r] = new Brick(0,0);
           bricks[c][r].status = true;
       }  
   }

   function drawBrick() {
        for (let c = 0; c < bricksCol; c++) {
            for (let r = 0; r < bricksRow; r++) {
                let brick = bricks[c][r];
                if(brick.status){
                    brick.x= (c*(brickPadding + brick.w) + brickLeft);
                    brick.y= (r*(brickPadding + brick.h) + brickTop);
                    brick.draw();
                }
                

               
            }  
        }
   }


   function collisionBricks() {
    for (let c = 0; c < bricksCol; c++) {
            for (let r = 0; r < bricksRow; r++) {
                
                let brick = bricks[c][r];
                if(brick.status){
                    if(checkCollision(ball, brick)){
                        ball.setSpeedY(-2);
                        brick.status = false;
                        count ++;

                        if(count == (bricksRow * bricksCol)) {
                            let anwser = confirm("You Win. Phay again ??");
                            if(anwser){
                                document.location.reload();
                            }else{
                                alert("SEEN YOU AGAIN !!!")
                                clearInterval(checkPlay);
                            }
                            
                        }
                    }
                }
                
            }  
        }
   }

function drawScore() {
    let score = new myContext(`SCORE : ${count}`,10,15);
    score.draw();
}
function drawLives() {
    let myLives = new myContext(`LIVES : ${lives}`,400,15);
    myLives.draw();
}

let checkPlay = setInterval(playBall,20);
document.querySelector("#play").onclick = function () {
    checkPlay = setInterval(playBall,20)
}

document.querySelector("#stop").onclick = function () {
    clearInterval(checkPlay);
}

document.querySelector("#resert").onclick = function () {
   document.location.reload();
}