let sp = [];
let sb = [];

function setup() {
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(2, 10, 25, 70);

   for (let i = 0; i < sp.length - 1; i++) {
    noFill();
    stroke(255, 255, 255, 220);
    strokeWeight(2);   
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
}

for (let i = 0; i < sp.length - 1; i++) {
    noFill();
    stroke(0, 100, 100, 60);
    strokeWeight(15);   
    line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
}

    for (const [index, particula] of sp.entries()) {
        particula.update();
        particula.display();
        if (particula.estaMuerta) {
            sp.splice(index, 1);
            //console.log('n Partículas: ' + sp.length);
        }
    }

    for (const [index, brillo] of sb.entries()) {
        brillo.update();
        brillo.display();
        if (brillo.estaMuerta) {
            sb.splice(index, 1);
            //console.log('n Partículas: ' + sp.length);
        }
    }
    
    if (frameCount % 3 == 0) {
    let np = new Particula(mouseX, mouseY);
    sp.push(np);}

    let nb = new Brillo(mouseX, mouseY);
    sb.push(nb);
}

function mouseClicked() {
    let np = new Particula(mouseX, mouseY);
    sp.push(np);

   // console.log('n Partículas: ' + sp.length);
}
