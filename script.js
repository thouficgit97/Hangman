const words = [
  "hello",
  "ginger",
  "parker",
  "gift",
  "guess",
  "buddy",
  "puppy",
  "bus",
  "frog",
  "lift",
  "bird",
  "chair",
  "table",
  "bucket",
  "king",
  "script",
  "right",
  "wrong",
  "bishop",
  "hang",
  "word",
  "shift",
  "port",
  "game",
  "symbol"
];
var rand = Math.floor(Math.random() * 25) + 1;
var word = words[rand];

window.onload = function () {
  for (var i = 0; i < word.length; i++) {
    var letter = document.getElementById(`${i + 1}`);
    letter.textContent = "_";
    answer.appendChild(letter);
  }
};
var result = document.getElementById("result");
var inputBox = document.getElementById("inputBox");

var answer = document.getElementById("word");

var start = document.getElementById("start");

var enterBtn = document.getElementById("Enter");
var reset = document.getElementById("reset");
var popoverlay = document.getElementById("popoverlay");

var checking = document.getElementById("checking");
var gameOver = document.getElementById("winorlose");
var ans = document.getElementById("ans");
var okbtn = document.getElementById("done");
var wrongCount = 0;
var correctCount = 0;

reset.addEventListener("click", function () {
  window.location.reload();
});
inputBox.addEventListener("keypress", function (event) {
  if (event.key == "Enter") check();
});

function help() {
  overlay.style.display = "block";
  cancelbtn.style.display = "block";
}

function cancel() {
  overlay.style.display = "none";
  cancelbtn.style.display = "none";
  gameOver.style.display = "none";
}

function check() {
    var flag=false;
    // var repeat=false;
    if(inputBox.value.toLowerCase()=="")
    {
        alert("Enter a letter!");
        return;
    }
    for(var i=1;i<=9;i++)
    {
        var crtexiLet=document.getElementById(`${i}`);
        if(inputBox.value.toLowerCase() == crtexiLet.textContent)
        {
            alert("You have entered this letter already!");
            inputBox.value="";
            return;
        }
    }

    for(var i=0;i<word.length;i++)
    {
        if(inputBox.value.toLowerCase()== word[i])
        {
            var letter=document.getElementById(`${i+1}`);
            letter.textContent=word[i];
            correctCount++;
            checking.textContent="Correct!";
            checking.style.color="green";
            flag=true;
        }
    }
    for(var i=1;i<=9;i++)
    {
        var wrngexiLet=document.getElementById(`wr${i}`);
        if(inputBox.value.toLowerCase() == wrngexiLet.textContent)
        {
            alert("You have entered this letter already!");
            inputBox.value="";
            return;
        }
    }
    if(!flag)
    {
        wrongCount++;
        var hw=document.getElementById(`hw${wrongCount}`);
        hw.style.textDecoration="line-through";
        hw.style.color="red";
        var wrongLetter=document.getElementById(`wr${wrongCount}`);
        wrongLetter.textContent=inputBox.value;
        wrongLetter.style.display="block";
        checking.textContent="Wrong !";
        checking.style.color="red";
    }
    
    inputBox.value = "";
    console.log(correctCount);
    console.log(wrongCount);
    checkWinOrLose();
  }


function checkWinOrLose() {
  if (wrongCount >= 9) {
    popoverlay.style.display = "block";
    gameOver.style.backgroundColor="red";
    gameOver.style.color="white";
    gameOver.style.display = "block";
    result.textContent = "You Lose!";
    enterbtn.disabled=true;
  } 
  else if (correctCount == word.length) {
    popoverlay.style.display = "block";
    gameOver.style.backgroundColor="yellow";
    gameOver.style.display = "block";
    result.textContent = "You Won!";
    enterbtn.disabled=true;
  }
  ans.textContent = word;
}

okbtn.addEventListener("click", function (event) {
  popoverlay.style.display = "none";
  gameOver.style.display = "none";
  if (event.key == "Enter") {
    popoverlay.style.display = "none";
    gameOver.style.display = "none";
  }
});
