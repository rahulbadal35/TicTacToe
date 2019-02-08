function a() {
    document.turn = "X";
    b(document.turn + "start")
}

function b(msg) {
    document.getElementById("message").innerHTML = msg;
}

function ab(square){
    if(square.innerHTML == ''){
        square.innerHTML = document.turn ;
        abc();

    } else {
        b("pick another square")
    }
    
}

function abc() {
    if(c(document.turn)) {
        b("congrats" + document.turn + ",you won ")
    } else if(document.turn == "X") {
        document.turn = "0";
        b("It's" + document.turn + "'s turn")
    } else {
        document.turn = "X";
        b("It's" + document.turn + "'s turn")
    }
    
}

function c(move) {
    var result = false;
    if(checkrow(1,2,3,move) ||
       checkrow(4,5,6,move) ||
       checkrow(7,8,9,move) ||
       checkrow(1,4,7,move) ||
       checkrow(2,5,8,move) ||
       checkrow(3,6,9,move) ||
       checkrow(1,5,9,move) ||
       checkrow(3,5,7,move)){
           result = true ;
       }
       return result;
} 


function checkrow(a,b,c,move) {
    var result = false;
    if(getbox(a) == move && getbox(b) == move && getbox(c) == move) {
        result = true;
    }
    return result;
}

function getbox(number) {
return document.getElementById("s" + number).innerHTML;
}