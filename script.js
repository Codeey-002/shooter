const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let objectX = screenWidth / 2;
  let objectY = screenHeight - 100;

function show_image(src, width, height, alt, left, top, position = "absolute") {
  let img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  img.style.position = position;
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

const stars = [];
const minSpacing = 60; 

function twinkleStar(star) {
  let opacity = Math.random();
  let fadingOut = Math.random() > 0.5;

  setInterval(() => {
    if (fadingOut) {
      opacity -= 0.03;
      if (opacity <= 0.3) fadingOut = false;
    } else {
      opacity += 0.03;
      if (opacity >= 1) fadingOut = true;
    }
    star.style.opacity = opacity;
  }, 50);
}

function random_stars() {
  let tries = 0;
  let placed = false;

  while (!placed && tries < 20) {
    let randomWidth = getRandomInt(0, screenWidth - 70);
    let randomHeight = getRandomInt(0, screenHeight - 70);

    
    let overlapping = stars.some(star => {
      let dx = star.x - randomWidth;
      let dy = star.y - randomHeight;
      let distance = Math.sqrt(dx * dx + dy * dy);
      return distance < minSpacing;
    });

    if (!overlapping) {
      let starImg = show_image("images/star.png", 10, 10, "star", randomWidth, randomHeight);
      starImg.style.opacity = 0.7;
      stars.push({ x: randomWidth, y: randomHeight });
      placed = true;

       twinkleStar(starImg)
    }

    tries++;
  }

 
}

for (let index = 0; index < 175; index++) {
  random_stars();
}

console.log(screenHeight, screenWidth);

function rocket() {
  const rock = show_image("images/rocket.png", 100, 100, "rockset", screenWidth / 2, screenHeight - 100);
  const moveSpeed = 10;
  

  window.addEventListener("keydown", (event) => {
    console.log(objectX, objectY);
    switch (event.key) {
      case "w":
        if (objectY < 0) {
          const boom_location = show_image("images/boom.png", 100, 100, "boom", objectX, objectY, "absolute");
          rock.style.scale = "0";
          break;
        }
        objectY -= moveSpeed;
        break;
      case "s":
        if (objectY > 900) {
          const boom_location = show_image("images/boom.png", 100, 100, "boom", objectX, objectY, "absolute");
          rock.style.scale = "0";
          break;
        }
        objectY += moveSpeed;
        break;
      case "a":
        if (objectX < 0) {
          const boom_location = show_image("images/boom.png", 100, 100, "boom", objectX, objectY, "absolute");
          rock.style.scale = "0";
          break;
        }
        objectX -= moveSpeed;
        break;
      case "d":
        if (objectX > 1600) {
          const boom_location = show_image("images/boom.png", 100, 100, "boom", objectX, objectY, "absolute");
          rock.style.scale = "0";
          break;
        }
        objectX += moveSpeed;
        break;
    }

    rock.style.left = `${objectX}px`;
    rock.style.top = `${objectY}px`;
  });

}

rocket();

  function bullets(){
const bullet = show_image("images/bullet-8468.png",13,40,"bullet",objectX+42,objectY-15,"absolute");
let bulletY = objectY-15;
const mySound = new Audio('images/meow.mp3');
  mySound.play();
 function moveBullet()
  {
    bulletY -= 60; 
    bullet.style.top = `${bulletY}px`;

     if (bulletY > -2000) {
      requestAnimationFrame(moveBullet);
    } else {
      bullet.remove(); 
    }
    
  }

  requestAnimationFrame(moveBullet);


  

}

  

window.addEventListener("keydown", (event) => {
  if ( event.key === " ")
  {
   bullets()
 }
});
