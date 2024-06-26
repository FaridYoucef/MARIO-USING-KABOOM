export class Level {
  constructor() {

    this.maps = [
      [
       "                                        ",
       "                                        ",
       "                                        ",
       "                                        ",
       "                                        ",
       "    %    %=*=%                           ",
       "                               -+        ",
       "     ;     ^    ^              ()       ",
       "=================================   =====",
     ],
      [
       "£                                      £",
       "£                                      £",
       "£                                      £",
       "£                                      £",
       "£        @@@@@              x x        £",
       "£                         x x x        £",
       "£                       x x x x   x  -+£",
       "£          z     z    x x x x x   x  ()£",
       "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
     ],
   ]
     

     this.levelCfg = {
         tileWidth: 20,
         tileHeight: 20,
   
         tiles: {
           "=": () => [sprite("brick"),pos(0, 150), area(), body({ isStatic: true })],
           "%": () => [sprite("surprise"), pos(0, 150), area(), body({ isStatic: true }), "ground"],
           "#": () => [sprite("mushroom"), pos(0, 150), area(), body({ isStatic: true }), "mushroom"],
           "*": () => [sprite("coin"), pos(0, 150),  area(),body({ isStatic: true }), "coin"],
           "}": () => [sprite("unboxed"), pos(0, 150),  area(),body({ isStatic: true })],
           "^": () => [sprite("evil-shroom"), pos(0, 150), scale(1),area(),body({ isStatic: true }), "dangrous",],
           "-": () => [sprite("pipe-top-left"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),"ground",],
           "+": () => [sprite("pipe-top-right"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),"ground",],
           "(": () => [ sprite("pipe-bottom-left"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),"ground",],
           ")": () => [sprite("pipe-bottom-right"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),"ground",],
           "£": () => [sprite("blue-brick"), scale(0.5), pos(0, 150), area(), body({ isStatic: true }), "ground"],
           "!": () => [sprite("blue-block"), scale(0.5), pos(0, 150), area(), body({ isStatic: true }), "ground"],
           "@": () => [sprite("blue-surprise"),scale(0.5),pos(0, 150), area(), body({ isStatic: true }),"coin-sueprise",],
           'z': () => [sprite("blue-evil-mushroom"),scale(0.5),  pos(0, 150), area(), body({ isStatic: true }),"dangerous"],
           'x': () => [sprite("blue-steel"), scale(0.5), pos(0, 150), area(), body({ isStatic: true })],
         }
     }
  
  }
    getMap(level) {
      return this.maps[level]
    }
    
    getLevelConfig() {
      return this.levelCfg
    }
}
