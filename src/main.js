import kaboom from "kaboom";
import { load } from "./loader";
import { level } from "./utils/level";

kaboom({
    height:640,
    width:1230,
    letterbox:true,
    global:true,
    background: [0, 0, 0, 1],
})

load.assets();


 scene("game", () => {
    
  const level1 = new level();
  level1.drawMaps()

    

 })
 go("game")
