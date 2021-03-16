function ageInDays(){
    var d = new Date();
    var yr = prompt("Year you were born");
    var result=365*((d.getFullYear()) - yr);
    console.log(result);
    var h1=document.createElement("h1");
    var textAns = document.createTextNode('You are ' + (result) +' days old');
    h1.appendChild(textAns);
    document.getElementById('ans').appendChild(h1);
}

function reset(){
    document.getElementById('ans').remove();
}

// rock paper scissor

function rps(yourChoice){
    console.log(yourChoice.id);
    var computerChoice= botchoice();
    console.log(computerChoice); 
    var num = decideWinner(yourChoice.id,computerChoice);
    console.log(num);
    var message = finalMessage(num);
    console.log(message);
    rpsFront(yourChoice.id,computerChoice,message);
    
}

function botchoice(){
    var arr = ['rock', 'paper', 'scissor'];
    return arr[Math.floor(Math.random()*3)];
}
function decideWinner(yourChoice,botchoice){
    var search = {
        'rock':{'rock':0.5,'paper': 0, 'scissor': 1},
        'paper':{'rock':1,'paper': 0.5, 'scissor': 0},
        'scissor':{'rock':0,'paper': 1, 'scissor': 0.5}
    }
    var yourScore = search[yourChoice][botchoice];
    var computerScore = search[botchoice][yourChoice];

    return [yourScore,computerScore];
}
function finalMessage([yourScore, computerScore]){
    if(yourScore === 1){
        return {'message':'You Won!', 'color':'green'};
    }
    else if(yourScore === 0.5){
        return {'message':'You Tied!', 'color':'yellow'};
    }
    else{
        return {'message':'You Lost!', 'color':'red'};
    }
}
function rpsFront(yourChoice,computerChoice,message) {
    var img={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    // console.log(img[computerChoice]);
    // remove img
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv= document.createElement('div');
    var messageDiv= document.createElement('div');
    var botDiv= document.createElement('div');
    humanDiv.innerHTML="<img src='"+img[yourChoice]+"' height=250 width=250 style='box-shadow: 0px 10px 50px rgb(98, 98, 255)'> ";
    messageDiv.innerHTML="<h1 style='color:"+message['color']+"; font-size:80px; padding:30px; '>"+message['message']+"</h1>";
    botDiv.innerHTML="<img src='"+img[computerChoice]+"' height=250 width=250 style='box-shadow: 0px 10px 50px rgb(255, 51, 0)'> ";
    document.getElementById('frontrps').append(humanDiv);
    document.getElementById('frontrps').append(messageDiv);
    document.getElementById('frontrps').append(botDiv);
    var btnReset=document.createElement('div');
    btnReset.innerHTML="<div class="+"'text-center flex-box-container'"+">"+
    "<button class="+"'btn btn-primary'" +"onclick="+"'bReset()'"+">Play More!</button>"+"</div>";
    document.getElementById('rst').append(btnReset);
}
function bReset(){
    location.reload(false);
}