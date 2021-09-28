class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h4');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Coin Collector");
        this.title.position(850, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'black');
        this.input.position(750,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'grey');
        this.button.position(760,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'grey');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'grey');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(700,250);
            this.greeting.style('color', 'red');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}