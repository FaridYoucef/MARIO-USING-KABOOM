import kaboom from "kaplay";
import { load } from "./loader";
import {  Level} from "./utils/level";
import {addMario} from './utils/player'




kaboom({
   scale:1.5,
  background: [ 0, 0, 255, ],
});

const levelManager = new Level();

load.assets();



scene("game", (level)  => {

    // Add level
    const map = levelManager.getMap(level); 
    const levelCfg = levelManager.getLevelConfig(0);

    const gameLevel = addLevel(map, {
      width: levelCfg.tileWidth,
      height: levelCfg.tileHeight,
      ...levelCfg,
    });

    // Add the player
    addMario(level, updateScore)

    // Render the score lable
    let score = 0;
    
    const scoreLable = add([text(`Score:${score}`, {font: "VT323"}), pos(12, 12), fixed(), {size: 24}, {value: score} ]);

    // Update the score
    function updateScore() {
      score++;
      scoreLable.text = `Score:${score}`;
    };

    // Background sound
    const sound = play("background", {
      volume: 0.5,
      loop: true,
    }) 
 
   // Lose scene
   scene('lose', () => { 
    add([text('Game Over', {font: "VT323"}), pos(width() / 2, height()/ 2 - 80), scale(2), anchor('center')]);
    add([text(`Score:${score}`, { font: "VT323"}), pos(width() / 2, height() / 2), scale(1.5), anchor("center")]);
    sound.stop();
    play("die");
})
 
});

go("game", 0);
