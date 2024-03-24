const words=["hello","ginger","parker","gift","guess","buddy","puppy","bus","frog","lift","bird","chair","table"];
var rand=Math.floor(Math.random()*15)+1;
var word=words[rand];

window.onload=function(){
    for(var i=0;i<word.length;i++){
        var letter=document.getElementById(`${i+1}`);
        letter.textContent='_';
        answer.appendChild(letter);
    }
}
var result=document.getElementById("result");
var inputBox=document.getElementById("inputBox");

var answer=document.getElementById("word");
// var startbtn=document.getElementById("load");
var start=document.getElementById("start");

var helpBtn=document.getElementById("helpBtn");
var overlay=document.getElementById("popup-overlay");
var popoverlay=document.getElementById("popoverlay");
var cancelbtn=document.getElementById("cancelpopup");

var checking=document.getElementById("checking");
var gameOver=document.getElementById("winorlose");
var ans=document.getElementById("ans");
var okbtn=document.getElementById("done");
var wrongCount=0;
var correctCount=0;

inputBox.addEventListener("keypress",function(event){
    if(event.key=="Enter")
        check();
})

/*function load()
{
    startbtn.style.display="block";
    for(var i=0;i<word.length;i++){
        var letter=document.getElementById(`${i+1}`);
        letter.textContent='_';
        answer.appendChild(letter);
    }
    startbtn.style.display="none";
}*/



function help(){
    overlay.style.display="block";
    cancelbtn.style.display="block";
}

function cancel()
{
    overlay.style.display="none";
    cancelbtn.style.display="none";
    gameOver.style.display="none";
}

function check()
{
    var flag=0;
    var repeat=false;
    if(inputBox.value=="")
    {
            alert("Enter something!");
            return;
    }
    var exist=document.getElementById(`ex${wrongCount}`);
        for(var i=1;i<=9;i++)
        {
            var exilet=document.getElementById(`${i}`);
            if(inputBox.value == exilet.textContent)
            {
                alert("You have entered this letter already!");
                inputBox.value="";
                repeat=true;
                return;
            }
        }
    if(repeat==false)
    {
    for(var i=0;i<word.length;i++)
    {
        if(inputBox.value == word[i])
        {
            var letter=document.getElementById(`${i+1}`);
            letter.textContent=word[i];
            correctCount++;
            flag=1;
        }
        
    }
    }
    if(flag==1)
    {
          checking.textContent="Correct !";
          checking.style.color="green";
    }
    else
    {   
        var repeat=false;
        
        wrongCount++;
        var exist=document.getElementById(`ex${wrongCount}`);
        for(var i=1;i<=9;i++)
        {
            var exilet=document.getElementById(`wr${i}`);
            if(inputBox.value == exilet.textContent)
            {
                alert("You have entered this letter already!");
                inputBox.value="";
                repeat=true;
                wrongCount--;
                return;
            }
        }
        if(repeat==false)
        {
        exist.style.textDecoration="line-through";
        exist.style.color="red";
        var wrongLetter=document.getElementById(`wr${wrongCount}`);
        wrongLetter.textContent=inputBox.value;
        wrongLetter.style.display="block";
        checking.textContent="Wrong !";
        checking.style.color="red";
        }
        
    }
    inputBox.value="";
    console.log(correctCount);
    console.log(wrongCount);
    checkWinOrLose();
    
}

function checkWinOrLose()
{
    if(wrongCount>=9)
    {
        popoverlay.style.display="block";
        gameOver.style.display="block";
        result.textContent="You Lose!";
      
    }
    else if(correctCount==word.length) {
        popoverlay.style.display="block";
        gameOver.style.display="block";
        result.textContent="You Won!";
    }
    ans.textContent=word;
}

okbtn.addEventListener("click",function(event){
    popoverlay.style.display="none";
    gameOver.style.display="none";
    if(event.key=="Enter")
    {
        popoverlay.style.display="none";
        gameOver.style.display="none";
    }
})