const config = {};
config.default = {};
config.default.gameSpecs = {
    width: 375,
    height: 812,
    renderer: Phaser.AUTO,
    parentID : "gameContainer",
    backgroundColor: 0x000000,
    resolution: 1
};
config.loadState = {
    style: {
        font: "30px Courier",
        fill: "#fff"
    },
    label: {
        text : {
            x: 80,
            y: 150,
            print: "loading..."
        }
    }
};
config.bootState = {};
config.menuState = {
    logo : {
        x: config.default.gameSpecs.width * 0.5,
        y: config.default.gameSpecs.height * 0.5,
        spriteKey: "menuLogo",
        spriteSrc: "assets/img/phaserLogo.png"
    }
};


config.default.states = {
    boot: {
        src: "gameStates/boot",
        name: "boot"
    },
    load: {
        src: "gameStates/load",
        name: "load"
    },
    menu: {
        src: "gameStates/menu",
        name: "menu",
    }
};
config.default.startingState = config.default.states.boot.name;


let isNodeJsCompatible = typeof module !== "undefined"
if (isNodeJsCompatible)  {
    module.exports = config;
}
