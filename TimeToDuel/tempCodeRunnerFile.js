class Player {
    constructor(name){
        this.name = name;
    }
}
class Ninja extends Player{
    constructor(name){
        super(name);
        this.coins= 20;
        this.power = 10;
        this.res = 10;
        this.cost = 0;
    }
    redBeltNinja(){
        this.cost = 3
        this.coins -= this.cost;
        this.power += 3;
        this.res += 4;
        }
    blackBeltNinja(){
        this.cost = 4
        this.coins -= this.cost;
        this.power += 5;
        this.res += 4;
    }
}
class Effect extends Ninja{
    constructor(name){
        super(name, 20, 10, 10)
        this.cost = 0;
    }
    hardAlgorithm(){
        this.cost = 2;
        this.coins-= this.cost;
        console.log("increase target's resilience by 3")
        this.res += 3;
    }
    unhandledPromiseRejection(){
        this.cost = 2;
        this.coins-= this.cost;
        console.log("reduce target's resilience by 2");
        this.res -= 2;
    }
    pairProgramming(){
        this.cost = 3;
        this.coins-= this.cost;
        console.log("increase target's power by 2");
        this.power += 2;
    }
}
//Turn 1
const player1 = new Effect("Mario");
console.log(player1);
player1.redBeltNinja();
console.log(player1);
