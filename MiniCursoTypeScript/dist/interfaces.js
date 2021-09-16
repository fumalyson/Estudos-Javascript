"use strict";
var ror2 = {
    title: "Risk of Rain 2",
    description: "Good game for past the time, amazing",
    genre: "Action, Rogue like, Third Person",
    platform: ["PC, Xbox, Playstations 4+"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Risk of Rain 1, Hero Siege, Warframe, Dead Cells, Borderlands 2");
    }
};
console.log(ror2.title);
if (ror2.getSimilars) {
    ror2.getSimilars(ror2.title);
}
var aniversaryUp = {
    title: "Risk of Rain 2 - Aniversary Update",
    description: "You can play with Bandit from first game",
    genre: "Action, Rogue Like, Third Person",
    originalGame: ror2,
    newContent: ['Bandit', 'Some items', 'New bosses']
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
