document.addEventListener('DOMContentLoaded', () => {
    // do your setup here
    console.log('Initialized app');

    const config = require("config/config");

    //Start the Phaser code
    const game = window.GAME = new Phaser.Game(config.default.gameSpecs);

    //Register all of the game states!!
    const stateList = Object.keys(config.default.states);
    stateList.forEach((state) => {
        let src = require(state.src)(game, config);
        game.state.add(state.name, src);
        console.log(`${state.name} state has been added to the game!!`);
    });

    game.state.start(config.default.startingState);

});
