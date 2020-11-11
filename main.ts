let player = game.createSprite(2, 4);
game.setScore(0);

basic.forever(function () {
    let cars = game.createSprite(randint(0, 4), 0);
    for(let i=0; i<=3; i++){
        basic.pause(100);
        cars.setY(cars.y()+1);
    }
    basic.pause(200);
    if(player.x() == cars.x()){
        game.gameOver();
        game.score();
    }else {
        cars.delete();
        game.setScore(game.score()+1);
    }

})

input.onButtonPressed(Button.A, function () {
    player.setX(player.x()-1);
})

input.onButtonPressed(Button.B, function () {
    player.setX(player.x()+1);
})