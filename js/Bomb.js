class Bomb {
  constructor(id) {
    this.id = id
    this.x = round(random(-100, 0))
    this.y = round(random(height, height + 100))
    this.w = 90
    this.h = 90
    this.speed = round(random(0.5, 1.5))
  }

  show() {
    ellipse(this.x, this.y, this.w, this.h)
  }
}