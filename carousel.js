function render( offsetX ) {
  carousel.innerHTML = ``
  let html = ``
  for(let n=0; n<60; n++)  {

    let zIndex = n >= 0 && n <= 12 || n >= 48 && n <= 60? 1: 0;
    let brightness = 0;
    if (n >= 0 && n <= 12) {
        brightness = 100 - n * 2;
    }
    if (n >= 48 && n <= 60) {
        brightness = 100 - (59-n) * 3;
    } 
    
      html += `
      <div class="slice" 
        style="transform: rotateY(${n*6}deg) translateZ(152px);
        background-position-x: -${n * 17.0666 + offsetX}px;
        z-index: ${zIndex};
        filter: brightness(${brightness}%)
        ">
       
      </div>
      `
  }
  carousel.innerHTML = html
}
let offX = 0
setInterval(function(){
offX += 1
render(offX)
}, 10)
//render()