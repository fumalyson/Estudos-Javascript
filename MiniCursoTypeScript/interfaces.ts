interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (tittle: string) => void;
}

const ror2: Game = {
    title: "Risk of Rain 2",
    description: "Good game for past the time, amazing",
    genre: "Action, Rogue like, Third Person",
    platform: ["PC, Xbox, Playstations 4+"],
    getSimilars: (title: string)=>{
        console.log(`Similar games to ${title}: Risk of Rain 1, Hero Siege, Warframe, Dead Cells, Borderlands 2`)
    }
}
console.log(ror2.title)

if(ror2.getSimilars){
    ror2.getSimilars(ror2.title)
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];

}
const aniversaryUp: DLC = {
    title: "Risk of Rain 2 - Aniversary Update",
    description: "You can play with Bandit from first game",
    genre: "Action, Rogue Like, Third Person",
    originalGame: ror2,
    newContent: ['Bandit','Some items','New bosses']
}

class CreateGame implements Game {
    title: string;
    description: string;
    readonly genre: string;
    
    constructor(t: string, d: string, g:string){
        this.title = t
        this.description = d
        this.genre = g 

    }
}
