
export class level {
  drawMaps() {
    this.maps = {
      map1: [
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
      map2: [
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
    };

    this.levelConfigs = {
      levelCfg1: {
        tileWidth: 20,
        tileHeight: 20,

        tiles: {
          "=": () => [sprite("brick"), area(), ],
          "%": () => [sprite("surprise")],
          "*": () => [sprite("coin"), "coin"],
          "^": () => [sprite("evil-shroom"), scale(1), "coin"],
          "-": () => [sprite("pipe-top-left"), scale(0.5)],
          "+": () => [sprite("pipe-top-right"), scale(0.5)],
          "(": () => [sprite("pipe-bottom-left"), scale(0.5)],
          ")": () => [sprite("pipe-bottom-right"), scale(0.5)],
        },
      },
      levelCfg2: {
        tileWidth: 20,
        tileHeight: 20,
        scale: 2,
        tiles: {
          "£": () => [sprite("blue-brick"), scale(0.5)],
          "!": () => [sprite("blue-block"), scale(0.5)],
          "@": () => [sprite("blue-surprise"), scale(0.5)],
          "z": () => [sprite("blue-evil-mushroom"), scale(0.5)],
          "z": () => [sprite("blue-steel"), scale(0.5)],
        },
      },
    };
  }

  getMap(name) {
    return this.maps[name];
  }

  getConfig(name) {
    return this.levelConfigs[name];
  }
}
