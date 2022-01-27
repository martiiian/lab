const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Wall {
  constructor(ctx, canvas) {
    this.ctx = ctx
    this.canvas = canvas
  }

  #renderBlock(options) {
    this.ctx.fillStyle = options.fill;
    this.ctx.fillRect(options.left, options.top, options.width, options.height);
  }

  renderBlocks() {
    const blockOptions = {
      width: 70, height: 20, space: 5, fill: 'red'
    }

    const columns = Math.ceil(this.canvas.offsetWidth / (blockOptions.width + blockOptions.space)) + 1;
    const rows = Math.ceil(this.canvas.offsetHeight / (blockOptions.height + blockOptions.space));

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      for (let colIndex = 0; colIndex < columns; colIndex++) {
        const offset = rowIndex % 2
          ? (blockOptions.width + blockOptions.space) / 2
          : 0

        this.#renderBlock({
          ...blockOptions,
          left: colIndex * (blockOptions.width + blockOptions.space) - offset,
          top: rowIndex * (blockOptions.height + blockOptions.space),
        });
      }
    }
  }

  fillBackground(color) {
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    this.ctx.fillStyle = color
    this.ctx.fillRect(0, 0, width, height)
  }
}

const wall = new Wall(ctx, canvas)

wall.fillBackground('black')
wall.renderBlocks()
ctx.rotate(20 * Math.PI / 180);
ctx.fillStyle = 'yellow'
ctx.fillRect(100, 100, 50, 50)
ctx.rotate(-(20 * Math.PI / 180));
ctx.fillRect(150, 100, 50, 50)
