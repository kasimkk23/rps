// Rock Paper Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randomToRpsInt());
    console.log( 'Computer Choice', botChoice);
    
    results = decideWinner(humanChoice, botChoice); // [1, 0] , human won | bot lost
    console.log(results);
    
    message = finalMessage(results); // You won!    
    console.log(message);

    rpsFrontend(humanChoice, botChoice, message);
}

function randomToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}


function decideWinner(yourChoice, computercChoice) {
    let rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    let yourScore = rpsDatabase[yourChoice][computercChoice];
    let computerScore = rpsDatabase[computercChoice][yourChoice];

    return[yourScore, computerScore];
}

function finalMessage([yourScore, computercScore]) {
    if(yourScore === 0){
        return {'message': 'You lost', 'color': 'red'}
    } else if(yourScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'}
    } else {
        return {'message': 'You won', 'color': 'green'}
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    // addding images with style
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(37,50,233,1)';>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(243,38,24,1)';>"
    
    // appending to html
    document.getElementById('rps-div').appendChild(humanDiv);
    document.getElementById('rps-div').appendChild(messageDiv);
    document.getElementById('rps-div').appendChild(botDiv);
}







