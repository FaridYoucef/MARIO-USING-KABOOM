
export function addMario(currentLevel) {
  let moveSpeed = 150;
  let jumpForce = 400;
  let currentJumpForce = jumpForce; // This ensures that Mario has a defined jump force
  let isJumping = true;
  
   
  const mario = add([
    sprite("mario"),
    pos(),
    area(),
    body({stickToPltform: true}),
  ]);
  
  //Gravity
  setGravity(1400) 

  // Destroy evil mushroom
mario.onCollide("dangrous", (d) => {
    destroy(d)
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
    if(mario.pos.y >= 400){
      go('lose')
     }
  })
  return mario;
}

