class Game{
    constructor(){
        
    }

    play(){
        player = createSprite(400, 200,20,20);
        player.addImage(playerImg);
        
        //text("Press R to reload", 50, 75);
        
        //bottle.setCollider("circle", 0, 0);
        //bottle.debug = true;
        //player.debug = true;

        this.handleBottles();
        this.handleBullets();
        this.mouseClicked();
    }

    handleBottles(){
        if (frameCount % 30 === 0){
            bottle = createSprite(random(50,750),random(50,350), 20, 20);
            bottle.addImage(bottleImg);
            bottle.scale = 0.05;
            
            bottle.lifetime = 150;
            bottleGroup.add(bottle);
          }
        
    }

    mouseClicked(){
        for(var i=0;i<bottleGroup.length;i++){
            if(mousePressedOver(bottleGroup.get(i))) {
                score += 1;
                var shotBottle = bottleGroup.get(i)
                shotBottle.destroy()
                console.log("click")
            }
        }
    }

    handleBullets(){
        var bullets = 12;

        fill("black");
        textSize(20);
        //text("Bullets: " +bullets, 50, 50);

        // if(keyDown("r")){
        //     bullets = 12;
        // }

        // if(bullet === 0){
            
        // }
    }

    
    
    display(){
        this.play();
    }
}