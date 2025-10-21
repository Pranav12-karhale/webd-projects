
const quizData=[
    {
      question:"Which programming language is known as the mother of all languages ?",
      options:["Assembly","C","Fortran","COBOL"],
      correctAnswer:2
    },
    {
      question:"What is the primary function of compiler ?",
      options:["Translation","Compilation","Debugging","Execution"],
      correctAnswer:0
    },
    {
      question:" Which keyword is used in Python to define a function?",
      options:["func", "def", "function", "lambda"],
      correctAnswer:1
    }
  ];
  
  let currentQuestionIndex=0;
  let score=0;
  
  function loadQuestion(){
    const questionElement=document.getElementById("question");
    const optionsContainer=document.getElementById("options");
    const nextButton=document.getElementById("next-btn");
  
    questionElement.innerText = quizData[currentQuestionIndex].question;
    optionsContainer.innerHTML="";
    quizData[currentQuestionIndex].options.forEach((option,index)=>{
      const button=document.createElement("button");
      button.innerText=option;
      button.className="option-btn";
      button.onclick=()=>selectAnswer(index);
      optionsContainer.appendChild(button);
    });
  
    nextButton.style.display="none";
  }
  
  function selectAnswer(selectedIndex){
    const correctAnswer=quizData[currentQuestionIndex].correctAnswer;
    const optionsButtons=document.querySelectorAll(".option-btn");
  
    optionsButtons.forEach((button,index)=>{
      if(index===correctAnswer){
        button.style.backgroundColor="green";
      } 
      else{
        button.style.backgroundColor=selectedIndex===index?"red":"";
      }
      button.disabled=true;
    });
  
    if(selectedIndex===correctAnswer){
      score++;
    }
    document.getElementById("next-btn").style.display="block";
  }
  
  function nextQuestion(){
    currentQuestionIndex++;
  
    if(currentQuestionIndex<quizData.length){
      loadQuestion();
    } 
    else{
      showScore();
    }
  }
  function showScore(){
    document.getElementById("quiz").style.display="none";
    const scoreContainer=document.getElementById("score-container");
    scoreContainer.style.display="block";
    document.getElementById("score").innerText=`${score}/${quizData.length}`;
  }
  
  loadQuestion();