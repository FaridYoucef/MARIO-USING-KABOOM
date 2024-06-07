import kaboom from "kaboom";
import { load } from "./loader";
import { level } from "./utils/level";

kaboom({
  fullscreen: true,
  width: window.innerWidth,
  height: window.innerHeight,
  global: true,
  background: [0, 0, 0, 1],
  scale: 1,
  debug:true,
});



load.assets();
const levelmanager = new level();

scene("game", () => {
  
  levelmanager.drawMaps();
  const map = levelmanager.getMap("map1");
  const levelCfg = levelmanager.getConfig("levelCfg1");

  //Calculate the size of the level
  const levelWidth = map[0].length * levelCfg.tileWidth;
  const levelHeight = map.length * levelCfg.tileWidth;

  //Calculate the postion to center the level
  const offsetX = (width() - levelWidth) / 2;
  const offsetY = (height() - levelHeight) / 2;

  //Add level
  const gameLevel = addLevel(map, {
    ...levelCfg,
    pos: vec2(offsetX, offsetY),
  });

  const score = add([text("Score: 0"), pos(24, 24), { value: 0 }]);
  const mario = add([sprite("mario"), pos(offsetX + 30, offsetY), scale(1), area(), body()]);

 

});
go("game");
