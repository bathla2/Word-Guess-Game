var userText = document.getElementById("user-text");
   

var textOne = document.getElementById("text1");
var wrongLetter = document.getElementById("text2");
var win = document.getElementById("text3");
var loss = document.getElementById("text4");
var win1 = 0;
var loss1 = 0;
var computerChoices = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
var word = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var remainingLetters=word.length;
var chances = 10;
var answer = [];
var wrongLetters = [];

function resetGame() {
  textOne = document.getElementById("text1");
  wrongLetter.textContent = " ";
  textOne.textContent = "10";
  computerChoices = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  word = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  remainingLetters=word.length;
  chances = 10;
  answer = [];
  wrongLetters = [];
  for(var i=0; i<word.length; i++)
     {
      answer[i] = "_";
     }
     userText.textContent = answer.join(",");
  
 }
    for(var i=0; i<word.length; i++)
     {
      answer[i] = "_";
     }
     userText.textContent = answer.join(",");
document.onkeyup = function(event) 
{

//userText.textContent = answer.join(",");
var check = false;
 
    
  if(answer.indexOf(event.key.toLowerCase())==-1 && remainingLetters>=0)
  {
    for (var j=0; j<word.length;j++)
    {
        if (event.key.toLowerCase() == word[j] && chances >= 1)
        {
          answer[j]= event.key.toLowerCase();
          remainingLetters--;
          userText.textContent=(answer.join(","));
          check = true;
          console.log(remainingLetters);
                  
        }

    }
  }
        
  else if (answer.indexOf(event.key.toLowerCase())!=-1)
  {
    check = true;
    alert("You have already guessed this before");
          
  }

  if (!check && wrongLetters.indexOf(event.key.toLowerCase())==-1)
  {
     

     chances--;
     textOne.textContent = chances;
     wrongLetters.push(event.key.toLowerCase());
     wrongLetter.textContent = wrongLetters.join(" , ");
     
  }
 
 if (chances<1)
  {
     alert("Thanks for playing, please try again. The correct word was: " + word);
     loss1 = loss1+1;
     loss.textContent=(loss1);
     resetGame();
     
  }
  else if (remainingLetters<=0)
  {
    alert ("Congratulations, you guessed the correct word, the answer is: " + word);
    win1 = win1 + 1;
    win.textContent=(win1);
    resetGame();
    
  }
};
