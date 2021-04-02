// Create a Ninja class
//  add an attribute: name
//  add an attribute: health
//  add a attribute: speed - give a default value of 3
//  add a attribute: strength - give a default value of 3
//  add a method: sayName() - This should log that Ninja's name to the console
//  add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
//  add a method: drinkSake() - This should add +10 Health to the Ninja

class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}
// const chase = new Ninja("Chase", 100);
// chase.sayName();
// chase.showStats();
// chase.drinkSake();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const drink = super.drinkSake();
        drink;
        console.log("What one programmer can do in a month, two programmers can do in two months")
        return this;
    }
    showStats(){
        const stats = super.showStats();
        stats;
        console.log("Wisdom: " + this.wisdom);
        return this;
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();