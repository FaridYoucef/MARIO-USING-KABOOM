export function addMario(currentLevel, updateScore) {
  let moveSpeed = 150;
  let jumpForce = 400;
  let currentJumpForce = jumpForce; // This ensures that Mario has a defined jump force
  let enemySpeed = 80;
  let isJumping = true;

  const mario = add([
    sprite("mario"),
    pos(),
    area(),
    body({ stickToPltform: true }),
  ]);

  //Gravity
  setGravity(1400);

  // Move Mario
  onKeyDown("left", () => {
    mario.move(-moveSpeed, 0);
  });

  onKeyDown("right", () => {
    mario.move(moveSpeed, 0);
  });

  onKeyPress("space", () => {
    if (mario.isGrounded()) {
      mario.jump(currentJumpForce);
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

  //Mushroom logic
  mario.onCollide("mushroom-surprise", (obj) => {
    if (obj) {
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
      });
    }
  });

  // Coins logic
  mario.onCollide("coin-surprise", (obj) => {
    const coinPos = obj.pos.sub(0, obj.height);
    add([sprite("coin"), pos(coinPos), area(), body(), "coin"]);
    obj.use(sprite("unboxed"));

    //Destroy coins
    mario.onCollide("coin", (c) => {
      destroy(c);
      updateScore(1);
    });
  });

  // Moving enemies
  onUpdate("dangrous", (d) => {
    d.move(-enemySpeed, 0);
  });

  // Destroying enemies
  mario.onCollide("dangrous", (d) => {
    if (mario.vel.y > 0) {
      destroy(d);
    } else {
      go("lose");
    }
  });

  return mario;
}
