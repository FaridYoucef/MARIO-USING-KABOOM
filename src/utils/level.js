export class Level {
  constructor() {

    this.maps = [
      [
       "                                        ",
       "                                        ",
       "                                        ",
       "                                        ",
       "                                        ",
       "    %    %=$=%                           ",
       "                               -+        ",
       "                         ^    ^()       ",
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
           "=": () => [sprite("brick"),pos(0, 150), area(), body({ isStatic: true }), "solid"],
           "%": () => [sprite("surprise"), pos(0, 150), area(), body({ isStatic: true }), "coin-surprise", { hit: false }],
           "$": () => [sprite("surprise"), pos(0, 150), area(), body({ isStatic: true }), "mushroom-surprise", { hit: false }],
          //  "#": () => [sprite("mushroom"), pos(0, 150), area(), body({ isStatic: true }), "mushroom"],
           "*": () => [sprite("coin"), pos(0, 150),  area(),body({ isStatic: true }), "coin"],
           "}": () => [sprite("unboxed"), pos(0, 150),  area(),body({ isStatic: true })],
           "^": () => [sprite("evil-shroom"), pos(0, 150), scale(1),area(),body({ isStatic: true }), "dangrous",],
           "-": () => [sprite("pipe-top-left"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),"pipe",],
           "+": () => [sprite("pipe-top-right"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),"pipe",],
           "(": () => [ sprite("pipe-bottom-left"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),],
           ")": () => [sprite("pipe-bottom-right"),pos(0, 150),scale(0.5),area(),body({ isStatic: true }),],
           "£": () => [sprite("blue-brick"), scale(0.5), pos(0, 150), area(), body({ isStatic: true }), "ground"],
           "!": () => [sprite("blue-block"), scale(0.5), pos(0, 150), area(), body({ isStatic: true }), "ground"],
           "@": () => [sprite("blue-surprise"),scale(0.5),pos(0, 150), area(), body({ isStatic: true }),"coin-surprise",],
           'z': () => [sprite("blue-evil-mushroom"),scale(0.5),  pos(0, 150), area(), body({ isStatic: true }),"dangrous"],
           'x': () => [sprite("blue-steel"), scale(0.5), pos(0, 150), area(), body({ isStatic: true }), "solid"],
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
