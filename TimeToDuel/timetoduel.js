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
    unhandledPromiseRejection(target){
        this.cost = 2;
        this.coins-= this.cost;
        console.log("reduce target's resilience by 2");
        target.res -= 2;
    }
    pairProgramming(){
        this.cost = 3;
        this.coins-= this.cost;
        console.log("increase target's power by 2");
        this.power += 2;
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} causing this much damage: ${this.power}`)
    }
}
//Turn 1
const player1 = new Effect("Mario");
player1.redBeltNinja();
player1.hardAlgorithm();
console.log(player1);

//Turn 2
const player2 = new Effect("Bowser");
player2.blackBeltNinja();
player2.unhandledPromiseRejection(player1);
console.log(player1);
console.log(player2);

//turn 3
player1.pairProgramming();


player1.attack(player2);
console.log(player1);
console.log(player2);