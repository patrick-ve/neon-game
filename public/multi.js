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

var divs = document.querySelectorAll("section article div");
var winElement = document.querySelector(".win");

var shortSound = document.querySelector(".short");
var longSound = document.querySelector(".long");

var player = document.querySelector(".player");

var scoreElement = document.querySelector(".score");
var scoreGetal = parseInt(scoreElement.innerHTML);
var clickElement = document.querySelector(".click");
var clickGetal = parseInt(clickElement.innerHTML);

var scoreElementTwee = document.querySelector(".score-two");
var scoreGetalTwee = parseInt(scoreElementTwee.innerHTML);
var clickElementTwee = document.querySelector(".click-two");
var clickGetalTwee = parseInt(clickElementTwee.innerHTML);

var playerOneTitle = document.querySelector(".player-title");
var playerTwoTitle = document.querySelector(".player-title-two");

var gameOver = false;
var nietClicken = false;
var bonus = false;
var changePlayer = true;

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
    if (clickGetalTwee <= 0) {
      clickGetalTwee = 0;
      clickElementTwee.textContent = clickGetalTwee;
    }
    if (event && event.isTrusted && clickGetal >= 0 && clickGetalTwee >= 0) {
      bonus = false;
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal - 1;
        clickElement.textContent = clickGetal;
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee - 1;
        clickElementTwee.textContent = clickGetalTwee;
      }
      changePlayer = true;
    }
    // stop the game when u dont have clicks any more
    if (clickGetal <= 0 && gameOver == false && clickGetalTwee <= 0) {
      gameOver = true;
      clickGetal = 0;
      clickElement.textContent = clickGetal;
      clickGetalTwee = 0;
      clickElementTwee.textContent = clickGetalTwee;
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
    }, doneFalling);

    // allow click after doneFalling (750 MS)
    canClick = false;
    clearTimeout(timer);
    timer = setTimeout(function (e) {
      canClick = true;
      if (changePlayer == true) {
        console.log("hiiiiiiiii");
        // players settings
        if (player.innerHTML == "Player one" && clickGetalTwee > 0) {
          console.log("a");
          player.textContent = "Player two";
          player.style.color = "#4DEFEA";
          player.classList.add("p");
          setTimeout(function () {
            player.classList.remove("p");
          }, 750);
        } else if (player.innerHTML == "Player two" && clickGetal > 0) {
          console.log("b");
          player.textContent = "Player one";
          player.style.color = "#F001FF";
          player.classList.add("p");
          setTimeout(function () {
            player.classList.remove("p");
          }, 750);
        }
        changePlayer = false;
      }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aEen, bEen, cEen, dEen]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aTwee, bTwee, cTwee, dTwee]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aDrie, bDrie, cDrie, dDrie]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aVier, bVier, cVier, dVier]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aFijv, bFijv, cFijv, dFijv]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aZes, bZes, cZes, dZes]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aZeven, bZeven, cZeven, dZeven]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aAcht, bAcht, cAcht, dAcht]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
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
      if (player.innerHTML == "Player one") {
        clickGetal = clickGetal + 1;
        clickElement.textContent = clickGetal;
        clickElement.classList.add('p');
        setTimeout(function () {
          clickElement.classList.remove("p");
        }, 750);
      } else if (player.innerHTML == "Player two") {
        clickGetalTwee = clickGetalTwee + 1;
        clickElementTwee.textContent = clickGetalTwee;
        clickElementTwee.classList.add('p');
        setTimeout(function () {
          clickElementTwee.classList.remove("p");
        }, 750);
      }
    }
    changePlayer = true;
    bonus = true;
    gameOver = false;
    canClick = true;
    clickMe([aNegen, bNegen, cNegen, dNegen]);
    if (player.innerHTML == "Player one") {
      scoreGetal = scoreGetal + 1;
      scoreElement.textContent = scoreGetal;
      scoreElement.classList.add('p');
      setTimeout(function () {
        scoreElement.classList.remove("p");
      }, 750);
    } else if (player.innerHTML == "Player two") {
      scoreGetalTwee = scoreGetalTwee + 1;
      scoreElementTwee.textContent = scoreGetalTwee;
      scoreElementTwee.classList.add('p');
      setTimeout(function () {
        scoreElementTwee.classList.remove("p");
      }, 750);
    }
    console.log("did clickMe(dNegen, true);");
  }
  if (scoreGetal > scoreGetalTwee && gameOver == true) {
    winElement.textContent = "Player one has won";
    winElement.style.border = "2px solid #F001FF";
    winElement.style.color = "#F001FF";
    winElement.classList.add("p-win");
  } else if (scoreGetalTwee > scoreGetal && gameOver == true) {
    winElement.textContent = "Player two has won";
    winElement.style.border = "2px solid #4DEFEA";
    winElement.style.color = "#4DEFEA";
    winElement.classList.add("p-win");
  } else if (scoreGetal == scoreGetalTwee && gameOver == true) {
    winElement.textContent = "No one has won";
    winElement.style.border = "2px solid #FFE700";
    winElement.style.color = "#FFE700";
    winElement.classList.add("p-win");
  }
}