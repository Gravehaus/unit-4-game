let enemy;
    
    function Enemy(enemyType, health, mana, strength, agility, speed){
    this.enemyType = enemyType;
    this.health = health; //I had it as "this.heath" and the player health worked but now neither work even though a number is represented
    this.mana = mana; //I'll figure out a better name ---BULLETS!----
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}