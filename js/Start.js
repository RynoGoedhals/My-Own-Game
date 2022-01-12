class Start{
    constructor(){
        this.playButton = createButton("Play");
        this.titleImg = createImg("./assets/title.png","game title");
    }

    setElementsPosition(){
        this.titleImg.position(150, 150);
        this.playButton.position(300, 250);
    }

    setElementsStyle(){
        this.titleImg.class("gameTitle");
        this.playButton.class("customButton");
    }

    hide(){
        this.titleImg.hide();
        this.playButton.hide();
    }

    handleMousePressed(){
        this.playButton.mousePressed(() => {
            this.hide();
            gameState = 2;
        })
    }

    display(){
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
    }
}