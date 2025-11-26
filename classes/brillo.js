class Brillo {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);

        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(0.1, 0.5));

        this.tVida = int(random(50,100));
        this.tVidaInicial= this.tVida;
        this.estaMuerta = false;
        this.diam = random(100, 200);

    }

    update() {
        if (!this.estaMuerta) {
            this.pos.add(this.vel);
            this.tVida -= 10;
        }

        if (this.tVida <= 0 && !this.estaMuerta) {
           // console.log('oops, me morí');
            this.estaMuerta = true;
        }
    }

    display() {
        fill(120, 255, 255, 30);
        noStroke();    
        this.diamFinal =map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
        circle(this.pos.x, this.pos.y, this.diamFinal);
    }
}
