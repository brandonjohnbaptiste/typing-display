const txt_h1 = document.querySelector('#typing-display');
const text_msg = document.getElementById('dis-input');

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


typingDisplay(text_msg.value);