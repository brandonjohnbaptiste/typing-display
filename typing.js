const txt_h1 = document.querySelector('#typing-display');
var text_msg = 'This is the test message';

function addLetter(text, pos, elm) {
    setTimeout(function() {
        elm.innerHTML += text.charAt(pos);
        console.log(text.charAt(pos));
    }, pos * 200);
    
}

function typingDisplay(text) {
    for (i = 0; i < text.length; i++) {
        addLetter(text, i, txt_h1);
    }
}


typingDisplay(text_msg);