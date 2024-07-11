export function addMario(currentLevel, updateScore) {
  let moveSpeed = 150;
  let jumpForce = 400;
  let superJump = 700;
  let currentJumpForce = jumpForce; // This ensures that Mario has a defined jump force
  let enemySpeed = 30;
  let isJumping = false;
  


  const mario = add([
    sprite("mario"),
    pos(),
    area(),
    body({ stickToPltform: true }),
    scale(1),
    { isBig: false },
  ]);

  //Gravity
  setGravity(1400);
  
// Make sure Mario land properlly on the ground
  mario.onCollide("solid", () => {
    isJumping = false;
  })

  // Move Mario
  onKeyDown("left", () => {
    mario.move(-moveSpeed, 0);
  });

  onKeyDown("right", () => {
    mario.move(moveSpeed, 0);
  });

  onKeyPress("space", () => {
    if (mario.isGrounded() && mario.isBig) {
      mario.jump(superJump);
    }else{
      if(mario.isGrounded())
      mario.jump(currentJumpForce);
    play("jump")
    }
  });

  // Camera following Mario
  mario.onUpdate(() => {
    camPos(mario.pos);
    if (mario.pos.y >= 400) {
      go("lose");
    }
  });

  // Moving Mario between levels
  mario.onCollide("pipe", () => {
    onKeyPress("down", () => {
      go("game", currentLevel + 1);
    });
  });

// Make Mario big
function MarioIsBig (mario) {
  const MarioSize = mario.scale;
  mario.use(scale(1.5));
  mario.isBig = true;

  wait(8, () => {
    mario.use(scale(MarioSize));
    mario.isBig = false;
  });
} 



  //Mushroom logic
  mario.onCollide("mushroom-surprise", (obj) => {
    if (!obj.hit) {
      obj.hit = true;
      const mushroomPos = obj.pos.sub(0, obj.height);
      let mushroom = add([
        sprite("mushroom"),
        pos(mushroomPos),
        area(),
        body(),
        "mushroom",
      ]);
      obj.use(sprite("unboxed"));

      //Move Mushroom
      mushroom.onUpdate(() => {
      mushroom.move(70, 0);
      });

      //Destroy mushroom
      mario.onCollide("mushroom", (m) => {
        destroy(m);
        MarioIsBig(mario);
        play("power-up")
      });
    }
  });

  // Coins logic
  mario.onCollide("coin-surprise", (obj) => {
    if (!obj.hit) {
      obj.hit = true;
      const coinPos = obj.pos.sub(0, obj.height);
      add([sprite("coin"), pos(coinPos), area(), body(), "coin"]);
      obj.use(sprite("unboxed"));
      play("coin");
    }
  });

  //Destroy coins
  mario.onCollide("coin", (c) => {
    destroy(c);
    updateScore();
    play("coin");
  });

  // Moving enemies
  onUpdate("dangrous", (d) => {
    d.move(-enemySpeed, 0);
  });

  // Destroying enemies
  mario.onCollide("dangrous", (d) => {
    if (mario.isBig) {
      destroy(d);
    } else {
      if (mario.vel.y > 0) {
        destroy(d);
      } else {
        go("lose");
      }
    }
  });

  return mario;
}
