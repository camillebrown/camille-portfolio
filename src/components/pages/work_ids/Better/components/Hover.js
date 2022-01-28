import React from 'react';
import { useEffect } from 'react/cjs/react.development';

export default function Hover() {
  useEffect(() => {
    const lettersArray = [];
    const word = document.getElementById('word');
    let content = word.innerText;

    splitLetters(word);

    function changeWord() {
      for (let i = 0; i < lettersArray.length; i++) {
        animateLetterOut(lettersArray, i);
      }

      for (let i = 0; i < lettersArray.length; i++) {
        lettersArray[i].className = 'letter behind';
        animateLetterIn(lettersArray, i);
      }
    }

    function animateLetterOut(cw, i) {
      setTimeout(function () {
        cw[i].className = 'letter out';
      }, i * 80);
    }

    function animateLetterIn(nw, i) {
      setTimeout(function () {
        nw[i].className = 'letter in';
      }, 340 + i * 80);
    }

    function splitLetters(word) {
      word.innerText = '';
      for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span');
        letter.className = 'letter';
        
        if (content.charAt(i) === ' ') {
          letter.innerText = ' • ';
          word.appendChild(letter);
          lettersArray.push(letter);
        } else {
          letter.innerText = content.charAt(i);
          word.appendChild(letter);
          lettersArray.push(letter);
        }
      }
    }

    changeWord();
    setInterval(changeWord, 4000);
  }, []);

  return (
    <span id="word" className="word">
      hover images
    </span>
  );
}
