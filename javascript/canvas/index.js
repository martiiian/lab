const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const numberOfParticles = 200
const particlesArray = []
const imageUrl = new URL('cat.png', import.meta.url)
const cat = new Image()
cat.src = imageUrl

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.angle = Math.random() * 360
    this.size = Math.random() * 100 + 50
    this.speed = Math.random() * 4 + 1
    this.angle = Math.random() * 360
    this.spin = Math.random() < 0.5 ? -1 : 1
  }

  draw() {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle * Math.PI / 360 * this.spin)
    // ctx.fillStyle = 'red'
    // ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(cat, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size)
    ctx.restore()
  }

  update() {
    this.angle += 10
    if (this.y > canvas.height) {
      this.y = 0 - this.size
      this.x = Math.random() * canvas.width
      this.size = Math.random() * 100 + 50
      this.speed = Math.random() * 4 + 1
    }
    this.y += this.speed
  }
}

function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle())
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (const particle of particlesArray) {
    particle.update()
    particle.draw()
  }
  requestAnimationFrame(animate)
}

init()
animate()