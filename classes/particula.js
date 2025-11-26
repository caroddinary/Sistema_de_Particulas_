class Particula {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);

        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(0.5, 1));

        this.tVida = int(random(100, 150));
        this.tVidaInicial= this.tVida;
        this.estaMuerta = false;
        this.diam = random(10,30);
        this.gravedad= createVector(0, 0.1);

        this.velAngula = random(-0.5, 0);


       // console.log('Holaaa');
    }

    update() {
        if (!this.estaMuerta) {
            this.vel.add(this.gravedad);
            this.vel.normalize();
            this.vel.setMag(3);
            this.vel.rotate(this.velAngula);
            this.pos.add(this.vel);
            this.vel.rotate(random(-0.1, 0.1));
            this.tVida -= 2;
        }

        if (this.tVida <= 0 && !this.estaMuerta) {
           // console.log('oops, me morí');
            this.estaMuerta = true;
        }
    }

    display() {
        fill(120, 200, 255, 255);
        stroke(255, 100, 200, 200);
        strokeWeight(50);       
        this.diamFinal =map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
        circle(this.pos.x, this.pos.y, this.diamFinal);
    }
}
