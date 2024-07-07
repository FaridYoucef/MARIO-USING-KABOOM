export function addMario() {
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

  // Destroy enemies
  mario.onCollide("dangrous", (d) => {
    destroy(d);
  });
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
  
  return mario;
}
