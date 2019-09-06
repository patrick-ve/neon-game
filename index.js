// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("remove")) {
      return;
    }
    Object.defineProperty(item, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

var shortSound = document.querySelector(".short");
var longSound = document.querySelector(".long");
var divs = document.querySelectorAll("section article div");
var scoreElement = document.querySelector(".score");
var scoreGetal = parseInt(scoreElement.innerHTML);
var clickElement = document.querySelector(".click");
var clickGetal = parseInt(clickElement.innerHTML);
var winElement = document.querySelector(".win");
var gameOver = false;
var nietClicken = false;
var bonus = false;

var timer;
var doneFalling = 750;
var canClick = true;

function getRandomColor() {
  var colors = ["#F001FF", "#4DEFEA", "#FFE700"];
  var nummerBlok = Math.floor(Math.random() * 3);
  var color = colors[nummerBlok];
  return color;
}

function clickMe(self, event) {
  if (canClick) {
    shortSound.play();
    // count the clicks
    if (clickGetal <= 0) {
      clickGetal = 0;
      clickElement.textContent = clickGetal;
    }
    if (event && event.isTrusted && clickGetal > 0) {
      bonus = false;
      clickGetal = clickGetal - 1;
      clickElement.textContent = clickGetal;
    }
    // stop the game when u dont have clicks any more
    if (clickGetal <= 0 && gameOver == false) {
      gameOver = true;
      clickGetal = 0;
      clickElement.textContent = clickGetal;
    } else if (gameOver == true) {
      return false;
    }

    // Set styles function
    function setStyles(element) {
      element.style.transform = "rotateY(" + 180 + "deg)";
      element.style.zIndex = "-99999";
      element.classList.add("verdwijn");
      element.classList.add("move");
    }

    // Set styles for obj or array
    if (Array.isArray(self)) {
      for (let i = 0; i < self.length; i += 1) {
        setStyles(self[i]);
      }
    } else {
      setStyles(self);
    }

    // Add new elements to parent function
    function addNewToParent(element) {
      var parent = element.parentElement;
      var newDiv = document.createElement("div");
      newDiv.addEventListener("click", function (e) {
        clickMe(e.target, e);
      });
      newDiv.style.background = getRandomColor();
      parent.appendChild(newDiv);
    }

    // Add new elements to parent for obj or array
    if (Array.isArray(self)) {
      for (let i = 0; i < self.length; i += 1) {
        addNewToParent(self[i]);
      }
    } else {
      addNewToParent(self);
    }

    // check raw by raw and not at the same time
    setTimeout(function () {
      if (Array.isArray(self)) {
        for (let i = 0; i < self.length; i += 1) {
          self[i].remove();
        }
      } else {
        self.remove();
      }
      controleren();
    }, 750);

    // allow click after doneFalling (750 MS)
    canClick = false;
    clearTimeout(timer);
    timer = setTimeout(function (event) {
      canClick = true;
    }, doneFalling);
  }
}

for (var i = 0; i < divs.length; i++) {
  divs[i].style.background = getRandomColor();
  divs[i].addEventListener("click", function (e) {
    clickMe(e.target, e);
  });
}

function controleren() {
  var aEen = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(1)"
  );
  var aTwee = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(2)"
  );
  var aDrie = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(3)"
  );
  var aVier = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(4)"
  );
  var aFijv = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(5)"
  );
  var aZes = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(6)"
  );
  var aZeven = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(7)"
  );
  var aAcht = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(8)"
  );
  var aNegen = document.querySelector(
    "section article:nth-of-type(1) div:nth-of-type(9)"
  );
  var bEen = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(1)"
  );
  var bTwee = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(2)"
  );
  var bDrie = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(3)"
  );
  var bVier = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(4)"
  );
  var bFijv = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(5)"
  );
  var bZes = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(6)"
  );
  var bZeven = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(7)"
  );
  var bAcht = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(8)"
  );
  var bNegen = document.querySelector(
    "section article:nth-of-type(2) div:nth-of-type(9)"
  );
  var cEen = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(1)"
  );
  var cTwee = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(2)"
  );
  var cDrie = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(3)"
  );
  var cVier = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(4)"
  );
  var cFijv = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(5)"
  );
  var cZes = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(6)"
  );
  var cZeven = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(7)"
  );
  var cAcht = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(8)"
  );
  var cNegen = document.querySelector(
    "section article:nth-of-type(3) div:nth-of-type(9)"
  );
  var dEen = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(1)"
  );
  var dTwee = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(2)"
  );
  var dDrie = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(3)"
  );
  var dVier = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(4)"
  );
  var dFijv = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(5)"
  );
  var dZes = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(6)"
  );
  var dZeven = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(7)"
  );
  var dAcht = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(8)"
  );
  var dNegen = document.querySelector(
    "section article:nth-of-type(4) div:nth-of-type(9)"
  );

  if (
    aEen.style.background === bEen.style.background &&
    aEen.style.background === cEen.style.background &&
    aEen.style.background === dEen.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aEen, bEen, cEen, dEen]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dEen, true);");
  } else if (
    aTwee.style.background === bTwee.style.background &&
    aTwee.style.background === cTwee.style.background &&
    aTwee.style.background === dTwee.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aTwee, bTwee, cTwee, dTwee]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dTwee, true);");
  } else if (
    aDrie.style.background === bDrie.style.background &&
    aDrie.style.background === cDrie.style.background &&
    aDrie.style.background === dDrie.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aDrie, bDrie, cDrie, dDrie]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dDrie, true);");
  } else if (
    aVier.style.background === bVier.style.background &&
    aVier.style.background === cVier.style.background &&
    aVier.style.background === dVier.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aVier, bVier, cVier, dVier]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dVier, true);");
  } else if (
    aFijv.style.background === bFijv.style.background &&
    aFijv.style.background === cFijv.style.background &&
    aFijv.style.background === dFijv.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aFijv, bFijv, cFijv, dFijv]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dFijv, true);");
  } else if (
    aZes.style.background === bZes.style.background &&
    aZes.style.background === cZes.style.background &&
    aZes.style.background === dZes.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aZes, bZes, cZes, dZes]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dZes, true);");
  } else if (
    aZeven.style.background === bZeven.style.background &&
    aZeven.style.background === cZeven.style.background &&
    aZeven.style.background === dZeven.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aZeven, bZeven, cZeven, dZeven]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dZeven, true);");
  } else if (
    aAcht.style.background === bAcht.style.background &&
    aAcht.style.background === cAcht.style.background &&
    aAcht.style.background === dAcht.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aAcht, bAcht, cAcht, dAcht]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dAcht, true);");
  } else if (
    aNegen.style.background === bNegen.style.background &&
    aNegen.style.background === cNegen.style.background &&
    aNegen.style.background === dNegen.style.background
  ) {
    longSound.pause();
    longSound.currentTime = 0;
    longSound.play();
    if (bonus == true) {
      clickGetal = clickGetal + 1;
      clickElement.textContent = clickGetal;
      clickElement.classList.add('p');
      setTimeout(function () {
        clickElement.classList.remove("p");
      }, 750);
    }
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aNegen, bNegen, cNegen, dNegen]);
    scoreGetal = scoreGetal + 1;
    scoreElement.textContent = scoreGetal;
    scoreElement.classList.add('p');
    setTimeout(function () {
      scoreElement.classList.remove("p");
    }, 750);
    console.log("did clickMe(dNegen, true);");
  }
  if (gameOver == true) {
    winElement.textContent = "Your Score: " + scoreGetal;
    winElement.style.border = "2px solid #FFE700";
    winElement.style.color = "#FFE700";
    winElement.classList.add("p-win");
  }
}