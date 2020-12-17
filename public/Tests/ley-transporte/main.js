/**
   * main.js-> js principal de test ley-transporte 
   * codigo que permite colocar las preguntas y opciones de respuesta
   * 
   *@version  17/12/20
   * @author Tania Bonilla  
   */
/**
 * declaracion de variables constantes que hacen referencia al numero de preguntas y contenedores
 * para mostrar la informacion del test
 */
const questionNUmber= document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer=document.querySelector(".option-container");
const answersIndicatorContainer=document.querySelector(".answers-indicator");
const homeBox=document.querySelector(".home-box")
const quizBox=document.querySelector(".quiz-box")
const resultBox=document.querySelector(".result-box")
/**variables para mantener contadores de puntaje, opciones disponibles,preguntas disponibles
 * respuestas correctas 
 */
let questionCounter=0;
let currentQuestion;
let availableQuesitons=[];
let availableOptions=[];
let correctAnswers=0;
let attempt=0;
/**
 * funcion para colocar las preguntas que se encuentran disponibles 
 */
function setAvailableQuestions(){
 const totalQuestion =quiz.length;
 for(let i=0;i<totalQuestion;i++){
     availableQuesitons.push(quiz[i])
 }

}
/**
 * funcion para obtener la nueva pregunta
 * de forma aleatoria utilizando el metodo math.random
 */
function getNewQuestion(){
 questionNUmber.innerHTML="Pregunta &nbsp;"+(questionCounter+1)+ "&nbsp; de  &nbsp;" + quiz.length;   
 /**set question text
 get random question**/
 const questionIndex= availableQuesitons[Math.floor(Math.random()*availableQuesitons.length)];
/**se atribuye el valor de numero de la respuesta al indicador */
currentQuestion= questionIndex;
questionText.innerHTML= currentQuestion.q;
const index1= availableQuesitons.indexOf(questionIndex);
availableQuesitons.splice(index1,1)
/**set options 
get the length of options**/
const optionLen = currentQuestion.options.length;
for(let i=0; i<optionLen; i++){
     /**se envian las opciones disponibles */
    availableOptions.push(i);

}
optionContainer.innerHTML='';
let animationDelay=0.15;
// create option html

for(let i=0;i<optionLen;i++){
    //random option
const optionIndex=availableOptions[Math.floor( Math.random()*availableOptions.length)];   
const index2= availableOptions.indexOf(optionIndex);
availableOptions.splice(index2,1);

const option= document.createElement("div");
option.innerHTML=currentQuestion.options[optionIndex];
option.id = optionIndex;
option.style.animationDelay=animationDelay+'s';
animationDelay=animationDelay + 0.15;
option.className ="option";
optionContainer.appendChild(option);
option.setAttribute("onclick","getResult(this)");



}
questionCounter++;

   

}
/**funcion obtener resultado */
function getResult(element){

    const id = parseInt(element.id);
    //get answer commaring
    if(id=== currentQuestion.answer){
        //set color
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswers++;
    }else{
        //wrong
        element.classList.add("correct");
        updateAnswerIndicator("correct");
    }
    attempt++;
    unclickableOptions();

}
/**funcion para no seleccionar otra respuesta */
function unclickableOptions(){
 const optionLen= optionContainer.children.length;
 for(let i=0;i<optionLen;i++){
     optionContainer.children[i].classList.add("already-answered");

 }
}
/**funcion muestra numero de pregunta */
function answersIndicator(){
    answersIndicatorContainer.innerHTML='';
    const totalQuestion=quiz.length;
    for(let i=0;i<totalQuestion;i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);

    }
}
/**obtener nueva pregunta */
function next(){
    if(questionCounter===quiz.length){
        quizOver();
    }else{
        getNewQuestion();
    }
}

window.onload=function(){
/**coloco las preguntas en posiiones disponibles en el array
 * */
    setAvailableQuestions();
/*
 llamamos la funcion para colocar nueva pregunta */
    getNewQuestion();
    answersIndicator();
}
function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)


}
/**funcion terminar juego */
function quizOver(){
    //hidequizbox

     quizBox.classList.add("hide");
    
    //show result box
    resultBox.classList.remove("hide");
    quizResult();
}
/**resultado juego */
function quizResult(){

    resultBox.querySelector(".total-question").innerHTML=quiz.length;
    resultBox.querySelector(".total-correct").innerHTML=correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML=attempt - correctAnswers;
    const percentage= (correctAnswers/quiz.length)*100;
    resultBox.querySelector(".total-percentage").innerHTML=percentage.toFixed(2)+"%";
    resultBox.querySelector(".total-score").innerHTML=correctAnswers+"/"+quiz.length;

}
/**funcion intentar nuevamente */
function tryAgainQuiz(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide"); 
    resetQuiz();
    startQuiz();

}
/**funcion que limpia los contadores para reiniciar juego */
function resetQuiz(){
     questionCounter=0;
     correctAnswers=0;
     attempt=0;
};
/**mostrar instrucciones */
function gotoInstructions(){
//  hideresultbox
 resultBox.classList.add("hide");
 homeBox.classList.remove("hide");
 resetQuiz();

}
/**comenzar quiz */
function startQuiz(){
    resetQuiz();
    //hide homebox
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");

    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}