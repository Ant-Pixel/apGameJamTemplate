module.exports = (game) => {

    const state = {};
    state.create = () => {
        //Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Initial Load State
        game.state.start('load');
    };


    return state;
}
