export class Rectangle {
   constructor(x = 0, y = 0, w = 0, h = 0, offX = 0, offY = 0) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.offX = offX;
      this.offY = offY;
   }
}

function makeCanvas(width, height) {
   var buffer = document.createElement('canvas');
   buffer.width = width;
   buffer.height = height;  
   
   return buffer;
}

export function clamp(min, val, max) {
   if(val < min) return min;
   else if(val > max) return max;
   else return val;
}

export class Renderer {
   constructor(viewport) {
      this.viewport = viewport;
      this.buffer = makeCanvas(256,232);
      this.ctx = this.buffer.getContext('2d');
      //this.ctx.translate(0.5, 0.5);
      this.finalResult = document.getElementById('output');
      this.finalCtx = this.finalResult.getContext('2d');
      this.finalCtx.mozImageSmoothingEnabled = false;
      this.finalCtx.webkitImageSmoothingEnabled = false;
      this.finalCtx.msImageSmoothingEnabled = false;
      this.finalCtx.imageSmoothingEnabled = false;
   }
   
   update(dt) {
      this.ctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
      this.viewport.paint(this.ctx);
      this.finalCtx.drawImage(this.buffer, 0,0, 512, 464);
   }

}