class Bullet {
  constructor(x, y, dir) {
    this.x = x
    this.y = y
    this.dir = dir
    this.speed = 10
    this.offScreen = false
  }

  shoot() {
    ellipse(this.x, this.y, 3, 3)
    switch (this.dir) {
      case "up":
        this.y -= this.speed
      break;

      case "down":
        this.y += this.speed
      break;

      case "left":
        this.x -= this.speed
      break;

      case "right":
        this.x += this.speed
      break;
    }

    this.checkOffScreen()

  }

  checkOffScreen() {
    if(this.y > height || this.y < 0 || this.x > width || this.x < 0) {
      this.offScreen = true
    }
  }
}