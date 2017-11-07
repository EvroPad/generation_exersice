const elGenerate = document.getElementById('generate');
const elBtn = document.getElementById('submitResult');

elGenerate.addEventListener('click', initQuestion);

function initQuestion() {
  document.getElementById("result").innerHTML = "";
  const difficulty = document.querySelectorAll('.selectedDifficulty:checked')[0].value;
  const question = new Question(difficulty);
  
  setQuestion(question.question);
  window.answer = btoa(question.answer);
  elBtn.removeEventListener('click', checkAnswer, false);
  elBtn.addEventListener('click', checkAnswer, false);
}

function checkAnswer() {
  let userNumber = document.getElementById("userNumber").value;
  const answer = atob(window.answer);
  
  if (userNumber == answer) {
    document.getElementById("result").innerHTML = "You're right!"
    document.getElementById("result").style = "color: green"
  } else {
    document.getElementById("result").innerHTML = "You're wrong!"
    document.getElementById("result").style = "color: red"
  }
}

function setQuestion(question) {
    document.getElementById("generNumber").innerHTML = 
    "<p>" + question + "</p>";
}



class Question {
  
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.answer = null;
    this.question = this.getQuestion();
  }
  
  getSign() {
    //this.difficulty
    let rnfgs = Math.round(Math.random() * 10); //randomNumberForGenerationSign
    switch(this.difficulty){
      case 'easy':
        if(rnfgs >= 0 && rnfgs < 5) {
          return '+';
        }
        else {
          return '-';
        }
      case 'medium':
        if(rnfgs >= 0 && rnfgs < 4) {
          return '+';
        }
        else if(rnfgs >= 4 && rnfgs < 7) {
          return '-';
        }
        else {
          return '*';
        }
      default:
        if (rnfgs >= 0 && rnfgs < 3) {
          return '+';
        }
        else if (rnfgs >= 3 && rnfgs < 6) {
          return '-';       
        }
        else {
          return '*';         
        }        
    }
  }
  
  getNumber() {
    //this.difficulty
    switch(this.difficulty) {
      case 'easy':
        return Math.round(Math.random() * 10);
      case 'medium':
        return Math.round(Math.random() * 100);
      case 'hard':
        return Math.round(Math.random() * 10000);
    }
  }
  
  getQuestion() {
    const firstNumber = this.getNumber();
    const secondNumber = this.getNumber();
    const sign = this.getSign();

    this.answer = eval(firstNumber + sign + secondNumber);
    return `${firstNumber} ${sign} ${secondNumber}`;
  }
  
}








/*function generation() {
  const elBtn = document.getElementById('submitResult');
  let difficulty = document.querySelectorAll('.selectedDifficulty:checked')[0].value;

  let { exercise, trueResult } = generationNumbers(difficulty);
  document.getElementById("generNumber").innerHTML = 
    "<p>" + exercise + "</p>";
  
  elBtn.addEventListener('click', ok.bind(null, trueResult));
}

function generationNumbers(difficulty) {
  let act;
  let numX;
  let numY;
  let actCode;
  let exercise;
  
  if (difficulty == "easy") {
    numX = Math.round(Math.random() * 10);
    numY = Math.round(Math.random() * 10);
  } else if (difficulty == "medium") {
    numX = Math.round(Math.random() * 100);
    numY = Math.round(Math.random() * 100);
  } else {
    numX = Math.random();
    numY = Math.random();
  }
  
//generation actCode and trueResult
  actCode = Math.round(Math.random() * 10);

  if (actCode >= 1 && actCode < 4) {
    act = "+";
    trueResult = numX + numY;
  }
  if (actCode > 3 && actCode < 7) {
    act = "-";
    trueResult = numX - numY;
  }
  if (actCode > 6 && actCode < 10) {
    act = "*";
    trueResult = numX * numY;
  }
  else {
    act = "/";
    trueResult = numX / numY;
  }
//
  
  exercise = numX + " " + act + " " + numY;
    
  return {
    exercise,
    trueResult
  };
}


function ok(trueResult) {
  let userNumber = document.getElementById("userNumber").value;
  
  if (userNumber == trueResult) {
    document.getElementById("result").innerHTML = "  You're right!"
  }
}
*/