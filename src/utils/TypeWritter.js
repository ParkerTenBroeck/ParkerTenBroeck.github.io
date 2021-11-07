document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "Software Developer.", "Student.", "Cat Lover."];
    

    function setText(text){
      for(let element of document.getElementsByClassName('typeWritter')) element.innerHTML = text;
    }
    function setBlink(blink){
      if(blink){
        for(let element of document.getElementsByClassName('blink')) element.classList.add('blinking-animation');
      }else{
        for(let element of document.getElementsByClassName('blink')) element.classList.remove('blinking-animation');
      }
    }
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, erase, fnCallback) {
      // chekc if text isn't finished yet
      if (!erase && i < (text.length)) {
        // add next character to h1
       setText(text.substring(0, i+1));

       if(i + 1 === text.length){
        setBlink(true);
        setTimeout(function() {
          setBlink(false);
          typeWriter(text, i + 1,true, fnCallback)
        }, 800);
       }else{
          // wait for a while and call this function again for next character if its the last char then wait a little longer :)
          setTimeout(function() {
            typeWriter(text, i + 1,false, fnCallback)
          }, 100);
       }
      }else if(i > 0){
        setText(text.substring(0, i-1));
        // delete last char
        setTimeout(function() {
          typeWriter(text, i - 1, true , fnCallback)
        }, 40);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback
        fnCallback();
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (dataText.length <= i){
          //restart
          i = 0;
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, false, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });