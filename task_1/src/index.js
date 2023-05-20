import Team from "./Team.js"
import Character from "./Character.js"
import Bowman from "./Bowman.js"
import Daemon from "./Daemon.js"
import Magician from "./Magician.js"
import Swordsman from "./Swordsman.js"
import Undead from "./Undead.js"
import Zombie from "./Zombie.js"

function start() {
    try {
        const Lenny = new Bowman('Lenny');
        const Charlie = new Swordsman('Charlie');
        const Nicola = new Magician('Nicola');
        const Azizicra = new Daemon('Azizicra');
        const Sleeper = new Undead('Sleeper');
        const Staren = new Zombie('Staren');
      
        // console.log(Lenny, Charlie, Nicola, Azizicra, Sleeper, Staren);

        const MyTeam = new Team();

        MyTeam.add(Lenny);
        MyTeam.add(Lenny);
        MyTeam.add(Nicola);
    
        console.log("FIRST")
        console.log(MyTeam)

        MyTeam.addAll(Azizicra, Sleeper, Nicola, Staren)

        console.log("SECOND")
        console.log(MyTeam)

        console.log("THIRD")
        console.log(MyTeam.toArray())

    } catch (error) {
        console.log(error);
    }
}

start();