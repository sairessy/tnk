class Player {
  constructor() {
    this.x = width * 0.5
    this.y = height * 0.5
    this.w = 20
    this.h = 20
    this.speed = 2
    this.bullets = 3
    this.dir = "up"
    this.bullet = null
  }

  show() {
    if(this.bullet !== null) {
      if(!this.bullet.offScreen) {
        this.bullet.shoot()
        if(this.bullet.offScreen) {
          this.bullet = null
        }
      }
    }

    rectMode(CENTER)
    fill(10)
    rect(this.x, this.y, this.w, this.h)
    switch (this.dir) {
      case "up":
        line(this.x, this.y, this.x, this.y - 25)  
        ellipse(this.x, this.y - 25, 3, 3)
      break;

      case "down":
        line(this.x, this.y, this.x, this.y + 25)  
        ellipse(this.x, this.y + 25, 3, 3)  
      break;

      case "left":
        line(this.x, this.y, this.x - 25, this.y)    
        ellipse(this.x - 25, this.y, 3, 3)
      break;

      case "right":
        line(this.x, this.y, this.x + 25, this.y)    
        ellipse(this.x + 25, this.y, 3, 3)
      break;
    }
  }

  fire() {
    this.bullet = new Bullet(this.x, this.y, this.dir)
  }

  move(dir) {
    switch (dir) {
      case 37:
        this.x -= this.speed
        this.dir = "left"
      break;

      case 38:
        this.y -= this.speed
        this.dir = "up"
      break;

      case 39:
        this.x += this.speed
        this.dir = "right"
      break;

      case 40:
        this.y += this.speed
        this.dir = "down"
      break;
    }
  }
}