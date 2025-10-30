const screenWidth = window.screen.width;
const screenHeight = window.screen.height;


function show_image(src, width, height, alt, left, top,opacity) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.style.position = "relative";
    img.style.left = left + "px";
    img.style.top = top + "px";
    document.body.appendChild(img);
    
    return img;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random_stars(){
  let randomWidth =  getRandomInt(0,7)
  let randomHeight =  getRandomInt(0,750)
  show_image("images/star.png", 50, 50, "star",randomWidth,randomHeight,"10%").style.opacity = 0.3;
  
}
for (let index = 0; index < 100; index++) {

    random_stars()
    
}

console.log(screenHeight,screenWidth)

function rocket()
{
const rock = show_image("images/rocket.png",100,100,"rocket",-800,600,"100%")
const moveSpeed = 10; 
let objectX = -800
let objectY = 600  

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      if (objectY < -100) break;
      objectY -= moveSpeed;
      break;
    case 's':
        if (objectY > 742) break;
      objectY += moveSpeed;
      break;
    case 'a':
      objectX -= moveSpeed;
      break;
    case 'd':
      objectX += moveSpeed;
      break;
  }

  rock.style.left = `${objectX}px`;
  rock.style.top = `${objectY}px`;
});
}
rocket()