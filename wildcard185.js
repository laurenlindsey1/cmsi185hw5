window.onload = function () {

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let categories;
  let word ;
  let guess ;
  let guesses = [ ];
  let lives ;
  let counter ;
  let space;

  showLives = document.getElementById("lives");
  getHint = document.getElementById("hint");
  showClue = document.getElementById("clue");

  function buttons() {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');
    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
   function result() {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
   function comments() {
    showLives.innerHTML = "You have " + lives + " attempts remaining";
    if (lives < 1) {
      showLives.innerHTML = "Game Over! The word was: " + word;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win! The word was: " + word;
      }
    }
  }
   function check() {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  function play() {
    categories = ["sydney", "paris", "chicago", "beijing", "miami", "victoria",
  "dubai", "tokyo", "barcelona", "amsterdam", "rome", "shanghai","london", "berlin"];
    word = categories[Math.floor(Math.random() * categories.length)];
    console.log(word);
    buttons();
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
  }
  play();
} //adpated from Cathy Duttons online hangman game
