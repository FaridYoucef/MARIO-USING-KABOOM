
export function addMario() {
  let moveSpeed = 120;
  let jumpForce = 400;
  let currentJumpForce = jumpForce; // This ensures that Mario has a defined jump force
  let isJumping = true;

   
  const mario = add([
    sprite("mario"),
    pos(),
    area(),
    body({stickToPltform: true}),
    big(),   
  ]);
  
  //Gravity
  setGravity(1400) 

mario.onCollide("dangrous", (m) => {
  destroy(m)
})
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
  }) 
    
  // Camera following Mario
  mario.onUpdate(() => {
    camPos(mario.pos)
  })
  




  return mario;
}

