let gameManager = {
setGameStart: function(classType){
    this.resetPlayer(classType);
    this.setPreFight();
    
    $('audio#promise')[0].play()
    
   
},




   resetPlayer: function(classType){

        switch(classType){

        case "Booker-dewitt":
        player = new Player(classType, 200, 100, 100, 75, 75); //classType: health, mana, strength, agility, speed
        break;
            
        case "Ellie-joel":
        player = new Player(classType, 250, 50, 75, 120, 120); //classType: health, mana, strength, agility, speed
        break;

        case "Heather-mason":
        player = new Player(classType, 100, 50, 75, 150, 150); //classType: health, mana, strength, agility, speed
        break;

        case "Issac-clarke":
        player = new Player(classType, 150, 150, 100, 75, 50); //classType: health, mana, strength, agility, speed
        break;

        case "James-sunderland":
        player = new Player(classType, 100, 75, 100, 110, 140); //classType: health, mana, strength, agility, speed
        break;

        case "Leon-kennedy":
        player = new Player(classType, 150, 100, 100, 150, 50); //classType: health, mana, strength, agility, speed
        break;    
    }
        let getInterface = document.querySelector(".interface"); //Cpy this line and then paster it with changes to "getInterface -> getPlayer/ add additional like that empties the interface." 
        getInterface.innerHTML = '<img src="assets/images/heroes/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>'  + classType + 
        '</h3><p class="health-player">Health: ' + player.health +  
        '</p><p>Bullets: ' + player.mana +  
        '</p> <p>Strength: ' + player.strength +  
        '</p> <p>Agility: ' + player.agility +  
        '</p> <p>Speed: ' + player.speed +  
        '</p></div>'; 

        
    

   },
   setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        
        
        // let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an Opponent! </p>';
        getActions.innerHTML = '<a href = "#" class= "btn btn-secondary btn-lg btn-preFight" onclick="gameManager.setFight()">Search for an Opponent!</a>';
        //getArena.style.visibility = "visible";
   },

   setFight: function(){
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    
    //CREATE ENEMY//
    let enemy00 = new Enemy("BigDaddy", 250, 50, 200, 10, 25);
    let enemy01 = new Enemy("Clicker", 80, 50, 100, 150, 150); ///only one without stats showing up. i.e. broken...
    let enemy02 = new Enemy("Necromorph", 150, 75, 100, 150, 100);
    let enemy03 = new Enemy("Nemesis", 250, 150, 150, 10, 50);
    let enemy04 = new Enemy("PyramidHead", 250, 50, 150, 10, 75);
    let enemy05 = new Enemy("RobbietheRabbit", 100, 50, 100, 150, 150);

    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(5)); //COMPUTER RANDOMLY PICKS ENEMY

    ///SOME OF THESE SWITCH CASES DONT RUN WHNE PAIRED WITH A SPECIFIC CHARACTER AND I DONT KNOW WHY...!

    switch(chooseRandomEnemy) {

        case 0:
        enemy = enemy00;  
        break;

        case 1:
        enemy = enemy01; 
        break;

        case 2:
        enemy = enemy02; 
        break;
    
        case 3:
        enemy = enemy03; 
        break;

        case 4:
        enemy = enemy04; 
        break;
        
        case 5:
        enemy = enemy05; 
        break;
        
    }
    getHeader.innerHTML = '<h2>Choose your move.</h2>';
    getActions.innerHTML = '<a href = "#" class= "btn btn-secondary btn-lg btn-preFight" onclick="playerMoves.calcAttack()">Attack!</a>';
    
    getEnemy.innerHTML = '<img src="assets/images/villans/' + enemy.enemyType.toLowerCase() + '.png" alt="' + 
    enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + 
    '</h3><p class="health-enemy">Health: ' +enemy.health + 
    '</p><p>Bullets: ' + enemy.mana + 
    '</p><p>Strength: ' + enemy.strength + 
    '</p><p>Agility: ' + enemy.agility + 
    '</p><p>Speed: ' + enemy.speed + 
    '</p></div>';

   }

   

}



//classType, health, mana, strength, agility, speed










//--------------------------------------------
//WHAT IS MY THEME?
//WHAT ARE STRENGTHS?
//WHAT ARE WEAKNESSES?
//HOW DO PLAYERS CHOOSE A CHARACTER?
//So I have the hit points down. Now I need to make hit points/ strengths for each character
//I NEED TO APPLY THIS ENTIRE "ATTACK" CODE TO EACH INDIVIUAL

//PRACTICE RUN. SIMPLE BATTLE COUNTER--WORKS.//
/*
let player = {
    health: 100,
    power: 20

}

let opponent = {
    health: 100,
    power: 20
}

const attack= () => {
    let attackButton = $('#attack-button');
    /*let restartButton = $("#restart-button");*/// This doesn't work but I can still reset game. Weird.
 /*   let gameMessage = $('#game-message');
    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();

    if (isGameOver(opponent.health)){
        endGame("Player Won!");
        return;
    }
    
    attackButton.disabled = true;
    gameMessage.innerText = "Opponent is about to strike!"
   
    setTimeout(() =>  {
        let opponentAttack= determineAttack(opponent.power);
        player.health -= opponentAttack;
        printToScreen();

        if (isGameOver(player.health)){
           
            endGame("Opponent has won!")
            
            return;
        }
        attackButton.disabled = false;
    }, 500);
}





const endGame = (message) => {
    document.getElementById('game-message').innerText = message;
    document.getElementById('attack-button'). hidden = true;
    document.getElementById("restart-button"). hidden = false;
}

const determineAttack = (power) => {
   return Math.floor(Math.random() * power);
}

const isGameOver = (health) => {
    return health <= 0;
}

const restart = () => {
    player.health= 100;
    opponent.health=100;
    document.getElementById('game-message').innerText = "";
    document.getElementById('attack-button'). hidden = false;
    document.getElementById("restart-button"). hidden = true;
    printToScreen();

}

const printToScreen = () => {
    document.getElementById('opponent-health').innerText = opponent.health;
    document.getElementById('player-health').innerText = player.health;
}



printToScreen(); */