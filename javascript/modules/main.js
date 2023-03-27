import { create, createReportList } from './modules/canvas.js';
import { name, draw, reportArea, reportPerimeter } from 'shapes/square';
import randomSquare from 'shapes/square';
import colors from './modules/colors.js'

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);
let bibaButton = document.getElementById('biba-button')

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);

bibaButton.addEventListener('click', () => {
  import('./modules/biba.js').then(Module => {
    Module.bibaFunction()
    console.log(colors)
  })
})
