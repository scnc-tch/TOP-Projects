
//Board game module that will operate the game and store the array
const boardGame = ( () => {
    const array = [];
    return {
        array
    };
})();


/*
the game is tick tack toe: this means that the main goal is for the user to give an input in any of the 6 squares and the computer will automatically give a follow up answer, this game will be played until there is a winner or a draw.

in planning, the first thing to do is to grab the squares and make them functional, so that the user can input something, this should be done in a module.
*/