import kaplay from "kaplay";
import { load } from "./loader";
import {  Level} from "./utils/level";
import {addMario} from './utils/player'




kaplay({
   scale:1.3,
   background: [ 0, 0, 255, ],
});

const levelManager = new Level();

load.assets();



scene("game", () => {

// Add level
const map = levelManager.getMap(1); // Change to 1 for the second map
const levelCfg = levelManager.getLevelConfig();

const gameLevel = addLevel(map, {
  width: levelCfg.tileWidth,
  height: levelCfg.tileHeight,
  ...levelCfg,
});


 // Render the score lable
 add([text("Score: 0"), pos(24, 24), { value: 0 }]);
 
 
 
});

go("game");
