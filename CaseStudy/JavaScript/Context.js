class myContext {
    constructor(text, weight, height) {
        this.text = text;
        this.weight = weight;
        this.height = height;
    }

    draw() {
        let ctx = document.querySelector("#myCanvas").getContext("2d");
        ctx.font = "15px Arial";
        ctx.fillStyle = "#FFB8A2";
        ctx.fillText(this.text, this.weight, this.height);
    }
}