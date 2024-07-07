import kaboom from "kaplay";
import { load } from "./loader";
import {  Level} from "./utils/level";
import {addMario} from './utils/player'




kaboom({
   scale:1.3,
   background: [ 0, 0, 255, ],
});

const levelManager = new Level();

load.assets();



scene("game", () => {

    // Add level
    const map = levelManager.getMap(); // Change to 1 for the second map
    const levelCfg = levelManager.getLevelConfig();

    const gameLevel = addLevel(map, {
      width: levelCfg.tileWidth,
      height: levelCfg.tileHeight,
      ...levelCfg,
    });

    // Add the player
    addMario()

    // Render the score lable
    let score = 0;
    
    const scoreLable = add([text(`Score:${score}`), pos(24, 24) ]);

  
 
   // Lose scene
   scene('lose', () => { 
    add([text('Game Over'), pos(width() / 2, height()/ 2 - 80), scale(2), anchor('center')])
})
 
});

go("game", 0);
