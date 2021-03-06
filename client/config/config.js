const config = {};
config.default = {};
config.default.gameSpecs = {
    width: 375,
    height: 812,
    renderType: Phaser.AUTO,
    parentID : "gameContainer"
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
        x: 25,
        y: 50,
        spriteKey: "menuLogo",
        spriteSrc: "assets/img/antPixelLogo.png"
    }
};


config.default.stateManager = {
    bootState: "boot",
    loadState: "load",
    menuState: "menu"
}



let isNodeJsCompatible = typeof module !== "undefined"
if (isNodeJsCompatible)  {
    module.exports = config;
}
