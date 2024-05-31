export class level {
     drawMaps () {
        const maps =
        [
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "                                        ",
            "========================================",
        ];
        const levelCfg = {
            width: 20,
            height: 20,
            pos: vec2(0, height() - maps.length * 16), // Position the map at the bottom
            "=": () => [
                sprite("block", pos(500,500)),
                area(),
                
            ],
        };
    
        // Create the level
        const gameLevel = addLevel(maps, {
            tileWidth: 16,
            tileHeight: 16,
            tiles: levelCfg,
        });
    }
     } 